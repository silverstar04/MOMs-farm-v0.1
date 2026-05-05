import {
  GoogleAuthProvider,
  getRedirectResult,
  linkWithPopup,
  linkWithRedirect,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  signInAnonymously,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getFirebaseAuth, getFirebaseDb } from "./firebase-init.js";

const saveDocPath = (uid) => ["users", uid, "save", "main"];
const debounceMs = 12000;
const pendingGoogleLoginKey = "momsFarmPendingGoogleLogin";
const status = {
  uid: null,
  signedIn: false,
  isAnonymous: true,
  provider: "none",
  message: "\uD074\uB77C\uC6B0\uB4DC \uC900\uBE44 \uC911...",
  cloudUpdatedAt: 0,
  saving: false,
};

let auth = null;
let db = null;
let saveTimer = null;
let latestQueuedSave = null;
let initialized = false;
let lastCheckedUid = null;

function initFirebaseSave() {
  if (initialized) return;
  initialized = true;

  try {
    auth = getFirebaseAuth();
    db = getFirebaseDb();
    if (!auth || !db) {
      setStatus("Firebase \uC124\uC815\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.");
      return;
    }
    setStatus("\uC775\uBA85 \uACC4\uC815\uC73C\uB85C \uC5F0\uACB0 \uC911...");

    onAuthStateChanged(auth, (user) => {
      if (!user) {
        status.uid = null;
        status.signedIn = false;
        status.isAnonymous = true;
        status.provider = "none";
        renderStatus();
        return;
      }
      status.uid = user.uid;
      status.signedIn = true;
      status.isAnonymous = user.isAnonymous;
      status.provider = getUserProvider(user);
      setStatus(user.isAnonymous ? "\uC775\uBA85 \uACC4\uC815\uC73C\uB85C \uC5F0\uACB0\uB410\uC5B4\uC694." : "Google \uACC4\uC815\uC73C\uB85C \uC5F0\uACB0\uB410\uC5B4\uC694.");
      if (lastCheckedUid !== user.uid) {
        lastCheckedUid = user.uid;
        checkInitialCloudSave();
      } else {
        renderStatus();
      }
    });

    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          status.provider = getUserProvider(result.user);
          setStatus("Google \uB85C\uADF8\uC778\uC744 \uC644\uB8CC\uD588\uC5B4\uC694.");
          const pendingLogin = readPendingGoogleLogin();
          clearPendingGoogleLogin();
          handleGoogleLoginResult(result.user, pendingLogin?.previousUid || null, pendingLogin?.localSave || null);
        }
      })
      .catch((error) => {
        console.warn("[cloud-save] redirect login failed", error);
        setStatus("Google \uB85C\uADF8\uC778\uC744 \uC644\uB8CC\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694. \uAC8C\uC784\uC740 \uACC4\uC18D\uD560 \uC218 \uC788\uC5B4\uC694.");
      })
      .finally(() => {
        if (!auth.currentUser) signInAnonymousSafely();
      });
  } catch (error) {
    console.warn("[cloud-save] init failed", error);
    setStatus("\uD074\uB77C\uC6B0\uB4DC \uC900\uBE44\uC5D0 \uC2E4\uD328\uD588\uC5B4\uC694. \uAC8C\uC784\uC740 \uACC4\uC18D\uD560 \uC218 \uC788\uC5B4\uC694.");
  }
}

function signInAnonymousSafely() {
  signInAnonymously(auth).catch((error) => {
    console.warn("[cloud-save] anonymous sign-in failed", error);
    setStatus("\uD074\uB77C\uC6B0\uB4DC \uB85C\uADF8\uC778\uC744 \uD558\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC774 \uAE30\uAE30 \uC800\uC7A5\uC740 \uACC4\uC18D \uB3D9\uC791\uD574\uC694.");
  });
}

function getUserProvider(user) {
  if (!user) return "none";
  if (user.providerData.some((provider) => provider.providerId === "google.com")) return "google";
  if (user.isAnonymous) return "anonymous";
  return "firebase";
}

function createGoogleProvider() {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  return provider;
}

function rememberPendingGoogleLogin(previousUid, localSave) {
  try {
    sessionStorage.setItem(pendingGoogleLoginKey, JSON.stringify({ previousUid, localSave }));
  } catch (error) {
    console.warn("[cloud-save] pending google login save failed", error);
  }
}

function readPendingGoogleLogin() {
  try {
    const raw = sessionStorage.getItem(pendingGoogleLoginKey);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.warn("[cloud-save] pending google login read failed", error);
    return null;
  }
}

function clearPendingGoogleLogin() {
  try {
    sessionStorage.removeItem(pendingGoogleLoginKey);
  } catch (error) {
    console.warn("[cloud-save] pending google login clear failed", error);
  }
}

function getSaveRef() {
  if (!db || !status.uid) return null;
  return doc(db, ...saveDocPath(status.uid));
}

async function getCloudSave() {
  const saveRef = getSaveRef();
  if (!saveRef) return null;

  const snapshot = await getDoc(saveRef);
  if (!snapshot.exists()) return null;
  return snapshot.data();
}

async function checkInitialCloudSave() {
  try {
    const cloudSave = await getCloudSave();
    if (!cloudSave?.saveData) {
      setStatus("\uC544\uC9C1 \uD074\uB77C\uC6B0\uB4DC \uC800\uC7A5\uC774 \uC5C6\uC5B4\uC694.");
      renderStatus();
      return;
    }

    status.cloudUpdatedAt = Number(cloudSave.clientUpdatedAt || 0);
    renderStatus();
    const localUpdatedAt = window.MomsFarmGameSave?.getLocalUpdatedAt?.() || 0;

    if (!localUpdatedAt) {
      showChooseSaveDialog(cloudSave, "server");
      return;
    }

    if (Math.abs(localUpdatedAt - status.cloudUpdatedAt) < 1000) {
      setStatus("\uC774 \uAE30\uAE30\uC640 \uD074\uB77C\uC6B0\uB4DC \uC800\uC7A5\uC774 \uAC19\uC544\uC694.");
      return;
    }

    showChooseSaveDialog(cloudSave, "ask");
  } catch (error) {
    console.warn("[cloud-save] initial check failed", error);
    setStatus("\uD074\uB77C\uC6B0\uB4DC \uC800\uC7A5\uC744 \uD655\uC778\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694.");
  }
}

function scheduleSave(saveData) {
  latestQueuedSave = saveData;
  if (!status.signedIn || !navigator.onLine) {
    setStatus("\uC624\uD504\uB77C\uC778\uC774\uB77C \uB098\uC911\uC5D0 \uD074\uB77C\uC6B0\uB4DC\uC5D0 \uC800\uC7A5\uD560\uAC8C\uC694.");
    return;
  }

  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(() => saveNow(latestQueuedSave), debounceMs);
}

async function saveNow(saveData = null) {
  try {
    const currentSaveData = saveData || latestQueuedSave || window.MomsFarmGameSave?.getSaveData?.();
    const saveRef = getSaveRef();
    if (!saveRef || !currentSaveData) {
      setStatus("\uD074\uB77C\uC6B0\uB4DC\uC5D0 \uC5F0\uACB0\uB41C \uB4A4 \uC800\uC7A5\uD560 \uC218 \uC788\uC5B4\uC694.");
      return { ok: false };
    }

    if (!navigator.onLine) {
      setStatus("\uC624\uD504\uB77C\uC778\uC774\uB77C \uD074\uB77C\uC6B0\uB4DC \uC800\uC7A5\uC744 \uBABB\uD588\uC5B4\uC694.");
      return { ok: false };
    }

    status.saving = true;
    setStatus("\uD074\uB77C\uC6B0\uB4DC\uC5D0 \uC800\uC7A5 \uC911...");
    const clientUpdatedAt = Date.now();
    const finalSaveData = {
      ...currentSaveData,
      clientUpdatedAt,
      saveVersion: window.MomsFarmGameSave?.getSaveVersion?.() || 1,
      appVersion: window.MomsFarmGameSave?.getAppVersion?.() || "0.1.0",
    };

    await setDoc(saveRef, {
      uid: status.uid,
      saveData: finalSaveData,
      updatedAt: serverTimestamp(),
      clientUpdatedAt,
      saveVersion: finalSaveData.saveVersion,
      appVersion: finalSaveData.appVersion,
    });

    status.saving = false;
    status.cloudUpdatedAt = clientUpdatedAt;
    latestQueuedSave = finalSaveData;
    setStatus("\uC774 \uAE30\uAE30\uC758 \uC800\uC7A5\uC744 \uD074\uB77C\uC6B0\uB4DC\uC5D0 \uBC31\uC5C5\uD588\uC5B4\uC694.");
    return { ok: true };
  } catch (error) {
    console.warn("[cloud-save] save failed", error);
    status.saving = false;
    setStatus("\uD074\uB77C\uC6B0\uB4DC \uC800\uC7A5\uC5D0 \uC2E4\uD328\uD588\uC5B4\uC694. \uC774 \uAE30\uAE30 \uC800\uC7A5\uC740 \uC548\uC804\uD574\uC694.");
    return { ok: false };
  }
}

async function loadNow() {
  try {
    const cloudSave = await getCloudSave();
    if (!cloudSave?.saveData) {
      setStatus("\uBD88\uB7EC\uC62C \uD074\uB77C\uC6B0\uB4DC \uC800\uC7A5\uC774 \uC5C6\uC5B4\uC694.");
      return;
    }

    status.cloudUpdatedAt = Number(cloudSave.clientUpdatedAt || 0);
    openCloudConfirm(
      "\uD074\uB77C\uC6B0\uB4DC \uC800\uC7A5\uC744 \uBD88\uB7EC\uC624\uBA74 \uD604\uC7AC \uC774 \uAE30\uAE30 \uC800\uC7A5\uC774 \uBC14\uB00C\uC5B4\uC694. \uBD88\uB7EC\uC62C\uAE4C\uC694?",
      () => useServerSave(cloudSave),
    );
  } catch (error) {
    console.warn("[cloud-save] load failed", error);
    setStatus("\uD074\uB77C\uC6B0\uB4DC \uC800\uC7A5\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694.");
  }
}

async function checkStatus() {
  try {
    const cloudSave = await getCloudSave();
    status.cloudUpdatedAt = Number(cloudSave?.clientUpdatedAt || 0);
    setStatus(cloudSave ? "\uD074\uB77C\uC6B0\uB4DC \uC800\uC7A5\uC744 \uD655\uC778\uD588\uC5B4\uC694." : "\uC544\uC9C1 \uD074\uB77C\uC6B0\uB4DC \uC800\uC7A5\uC774 \uC5C6\uC5B4\uC694.");
  } catch (error) {
    console.warn("[cloud-save] status failed", error);
    setStatus("\uD074\uB77C\uC6B0\uB4DC \uC0C1\uD0DC\uB97C \uD655\uC778\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694.");
  }
}

async function signInWithGoogle() {
  if (!auth) {
    setStatus("Firebase \uB85C\uADF8\uC778\uC774 \uC900\uBE44\uB418\uC9C0 \uC54A\uC558\uC5B4\uC694.");
    return;
  }

  if (!navigator.onLine) {
    setStatus("\uC624\uD504\uB77C\uC778\uC774\uB77C Google \uB85C\uADF8\uC778\uC744 \uD560 \uC218 \uC5C6\uC5B4\uC694.");
    return;
  }

  const provider = createGoogleProvider();
  const previousUid = auth.currentUser?.uid || null;
  const localSave = window.MomsFarmGameSave?.getSaveData?.();
  setStatus("Google \uB85C\uADF8\uC778 \uC911...");

  try {
    let result = null;
    if (auth.currentUser?.isAnonymous) {
      result = await linkWithPopup(auth.currentUser, provider);
      setStatus("Google \uACC4\uC815\uC73C\uB85C \uC5F0\uB3D9\uD588\uC5B4\uC694.");
    } else {
      result = await signInWithPopup(auth, provider);
      setStatus("Google \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778\uD588\uC5B4\uC694.");
    }
    handleGoogleLoginResult(result?.user, previousUid, localSave);
  } catch (error) {
    console.warn("[cloud-save] google popup/link failed", error);
    if (shouldUseRedirect(error)) {
      setStatus("Google \uB85C\uADF8\uC778 \uD654\uBA74\uC73C\uB85C \uC774\uB3D9\uD560\uAC8C\uC694.");
      try {
        rememberPendingGoogleLogin(previousUid, localSave);
        if (auth.currentUser?.isAnonymous) {
          await linkWithRedirect(auth.currentUser, provider);
        } else {
          await signInWithRedirect(auth, provider);
        }
      } catch (redirectError) {
        console.warn("[cloud-save] google redirect failed", redirectError);
        setStatus("Google \uB85C\uADF8\uC778\uC5D0 \uC2E4\uD328\uD588\uC5B4\uC694. \uC774 \uAE30\uAE30 \uC800\uC7A5\uC740 \uACC4\uC18D \uC0AC\uC6A9\uD560 \uC218 \uC788\uC5B4\uC694.");
      }
      return;
    }

    if (isCredentialConflict(error)) {
      try {
        const result = await signInWithPopup(auth, provider);
        setStatus("Google \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778\uD588\uC5B4\uC694.");
        handleGoogleLoginResult(result?.user, previousUid, localSave);
      } catch (signInError) {
        console.warn("[cloud-save] google sign-in after conflict failed", signInError);
        setStatus("Google \uB85C\uADF8\uC778\uC5D0 \uC2E4\uD328\uD588\uC5B4\uC694. \uAC8C\uC784\uC740 \uACC4\uC18D\uD560 \uC218 \uC788\uC5B4\uC694.");
      }
      return;
    }

    setStatus("Google \uB85C\uADF8\uC778\uC5D0 \uC2E4\uD328\uD588\uC5B4\uC694. \uAC8C\uC784\uC740 \uACC4\uC18D\uD560 \uC218 \uC788\uC5B4\uC694.");
  }
}

function shouldUseRedirect(error) {
  return [
    "auth/popup-blocked",
    "auth/popup-closed-by-user",
    "auth/cancelled-popup-request",
    "auth/operation-not-supported-in-this-environment",
  ].includes(error?.code);
}

function isCredentialConflict(error) {
  return [
    "auth/credential-already-in-use",
    "auth/email-already-in-use",
    "auth/provider-already-linked",
  ].includes(error?.code);
}

function handleGoogleLoginResult(user, previousUid, localSave) {
  if (!user) return;
  status.uid = user.uid;
  status.signedIn = true;
  status.isAnonymous = user.isAnonymous;
  status.provider = getUserProvider(user);
  renderStatus();

  if (previousUid && previousUid !== user.uid && localSave) {
    openCloudConfirm(
      "Google \uACC4\uC815\uC73C\uB85C \uBC14\uB00C\uC5C8\uC5B4\uC694. \uD604\uC7AC \uC774 \uAE30\uAE30 \uC800\uC7A5\uC744 Google \uACC4\uC815 \uD074\uB77C\uC6B0\uB4DC\uB85C \uC62E\uAE38\uAE4C\uC694?",
      () => saveNow(localSave),
    );
  }

  checkInitialCloudSave();
}

async function signOutGoogle() {
  try {
    await signOut(auth);
    lastCheckedUid = null;
    status.uid = null;
    status.signedIn = false;
    status.isAnonymous = true;
    status.provider = "none";
    status.cloudUpdatedAt = 0;
    setStatus("Google \uB85C\uADF8\uC544\uC6C3\uD588\uC5B4\uC694. \uC774 \uAE30\uAE30 \uC800\uC7A5\uC740 \uADF8\uB300\uB85C\uC608\uC694.");
    signInAnonymousSafely();
  } catch (error) {
    console.warn("[cloud-save] sign out failed", error);
    setStatus("\uB85C\uADF8\uC544\uC6C3\uC744 \uC644\uB8CC\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694.");
  }
}

function showChooseSaveDialog(cloudSave, mode) {
  const localTime = window.MomsFarmGameSave?.getLocalUpdatedAt?.() || 0;
  const cloudTime = Number(cloudSave.clientUpdatedAt || 0);
  const recommended = mode === "server" || cloudTime > localTime ? "server" : "local";

  const overlay = createDialogShell();
  overlay.querySelector(".cloud-save-dialog").innerHTML = `
    <h2>\uC800\uC7A5 \uC120\uD0DD</h2>
    <p>\uC774 \uAE30\uAE30\uC640 \uD074\uB77C\uC6B0\uB4DC\uC5D0 \uC800\uC7A5\uC774 \uB458 \uB2E4 \uC788\uC5B4\uC694.</p>
    <p>\uC774 \uAE30\uAE30: ${formatTime(localTime)}<br />\uD074\uB77C\uC6B0\uB4DC: ${formatTime(cloudTime)}</p>
    <div class="cloud-save-actions">
      <button id="useLocalSaveButton" class="secondary-button" type="button">\uC774 \uAE30\uAE30 \uC800\uC7A5 \uC0AC\uC6A9</button>
      <button id="useServerSaveButton" class="small-button" type="button">\uD074\uB77C\uC6B0\uB4DC \uC800\uC7A5 \uC0AC\uC6A9</button>
      <button id="useLatestSaveButton" class="secondary-button" type="button">\uB354 \uCD5C\uC2E0 \uC800\uC7A5 \uC0AC\uC6A9</button>
    </div>
    <p class="empty-sell-text">\uCD94\uCC9C: ${recommended === "server" ? "\uD074\uB77C\uC6B0\uB4DC" : "\uC774 \uAE30\uAE30"} \uC800\uC7A5</p>
  `;

  overlay.querySelector("#useLocalSaveButton").addEventListener("click", () => {
    closeDialogShell(overlay);
    saveNow();
  });
  overlay.querySelector("#useServerSaveButton").addEventListener("click", () => {
    closeDialogShell(overlay);
    useServerSave(cloudSave);
  });
  overlay.querySelector("#useLatestSaveButton").addEventListener("click", () => {
    closeDialogShell(overlay);
    if (cloudTime > localTime) {
      useServerSave(cloudSave);
    } else {
      saveNow();
    }
  });
}

function useServerSave(cloudSave) {
  try {
    window.MomsFarmGameSave?.applySaveData?.(cloudSave.saveData, { skipCloud: true });
    status.cloudUpdatedAt = Number(cloudSave.clientUpdatedAt || 0);
    setStatus("\uD074\uB77C\uC6B0\uB4DC \uC800\uC7A5\uC744 \uBD88\uB7EC\uC654\uC5B4\uC694.");
  } catch (error) {
    console.warn("[cloud-save] apply failed", error);
    setStatus("\uD074\uB77C\uC6B0\uB4DC \uC800\uC7A5\uC744 \uC801\uC6A9\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694.");
  }
}

function openCloudConfirm(message, onConfirm) {
  const overlay = createDialogShell();
  overlay.querySelector(".cloud-save-dialog").innerHTML = `
    <p>${message}</p>
    <div class="cloud-save-actions">
      <button id="cloudCancelButton" class="secondary-button" type="button">\uCDE8\uC18C</button>
      <button id="cloudOkButton" class="small-button" type="button">\uD655\uC778</button>
    </div>
  `;
  overlay.querySelector("#cloudCancelButton").addEventListener("click", () => closeDialogShell(overlay));
  overlay.querySelector("#cloudOkButton").addEventListener("click", () => {
    closeDialogShell(overlay);
    onConfirm();
  });
}

function createDialogShell() {
  const overlay = document.createElement("div");
  overlay.className = "cloud-save-overlay";
  overlay.innerHTML = `<section class="cloud-save-dialog" role="dialog" aria-modal="true"></section>`;
  document.body.appendChild(overlay);
  return overlay;
}

function closeDialogShell(overlay) {
  overlay.remove();
}

function setStatus(message) {
  status.message = message;
  renderStatus();
}

function getStatusText() {
  if (!navigator.onLine) return "\uC624\uD504\uB77C\uC778";
  if (!status.signedIn) return status.message || "\uB85C\uADF8\uC778 \uC900\uBE44 \uC911";
  if (status.saving) return "\uC800\uC7A5 \uC911...";
  return status.message;
}

function getLoginStatusText() {
  if (!status.signedIn) return "\uB85C\uADF8\uC778 \uC900\uBE44 \uC911";
  if (status.provider === "google") return "Google \uACC4\uC815\uC73C\uB85C \uC5F0\uB3D9\uB428";
  if (status.provider === "anonymous") return "\uC774 \uAE30\uAE30\uC758 \uC775\uBA85 \uC800\uC7A5";
  return "\uD074\uB77C\uC6B0\uB4DC\uC5D0 \uC5F0\uACB0\uB428";
}

function renderStatus() {
  const statusText = document.querySelector("#cloudSaveStatus");
  const loginText = document.querySelector("#cloudLoginStatus");
  const cloudTimeText = document.querySelector("#cloudSaveTime");
  const localTimeText = document.querySelector("#localSaveTime");
  if (statusText) statusText.textContent = getStatusText();
  if (loginText) loginText.textContent = getLoginStatusText();
  if (cloudTimeText) cloudTimeText.textContent = formatTime(status.cloudUpdatedAt);
  if (localTimeText) localTimeText.textContent = formatTime(window.MomsFarmGameSave?.getLocalUpdatedAt?.() || 0);
}

function formatTime(timestamp) {
  return window.MomsFarmGameSave?.formatSaveTime?.(timestamp) || "\uC544\uC9C1 \uC5C6\uC5B4\uC694";
}

window.MomsFarmCloudSave = {
  scheduleSave,
  saveNow,
  loadNow,
  checkStatus,
  signInWithGoogle,
  signOutGoogle,
  renderStatus,
  getStatusText,
  getLoginStatusText,
};

window.addEventListener("online", () => {
  setStatus("\uC628\uB77C\uC778\uC73C\uB85C \uB3CC\uC544\uC654\uC5B4\uC694.");
  if (latestQueuedSave) saveNow(latestQueuedSave);
});
window.addEventListener("offline", () => setStatus("\uC624\uD504\uB77C\uC778\uC774\uC5D0\uC694. \uC774 \uAE30\uAE30\uC5D0\uB294 \uC800\uC7A5\uB3FC\uC694."));

initFirebaseSave();
