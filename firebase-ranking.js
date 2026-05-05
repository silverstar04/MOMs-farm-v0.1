import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD0WQXZ5I3SYGICi4GfpwV8kFT3IqsbWzs",
  authDomain: "moms-farm.firebaseapp.com",
  projectId: "moms-farm",
  storageBucket: "moms-farm.firebasestorage.app",
  messagingSenderId: "842738034459",
  appId: "1:842738034459:web:a6f3fc23b1d81b5fd555be",
  measurementId: "G-EG8YXS7B6W",
};

const saveKey = "moms-farm-save-v1";
const playerIdKey = "moms-farm-ranking-player-id";
const rankingsCollection = "rankings";
const rankingRefreshMs = 30000;
let db = null;
let rankingTimer = null;

function isFirebaseConfigured() {
  return Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId);
}

function getDb() {
  if (!isFirebaseConfigured()) return null;
  if (!db) {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  }
  return db;
}

function getLocalPlayerId() {
  let playerId = localStorage.getItem(playerIdKey);
  if (playerId) return playerId;

  playerId = globalThis.crypto?.randomUUID?.() || `player-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  localStorage.setItem(playerIdKey, playerId);
  return playerId;
}

function getLocalScore() {
  try {
    const save = JSON.parse(localStorage.getItem(saveKey) || "{}");
    const level = Math.max(1, Math.floor(Number(save.player?.level)) || 1);
    const gold = Math.max(0, Math.floor(Number(save.gold)) || 0);
    return level * 1000 + gold;
  } catch {
    return 0;
  }
}

async function deletePreviousPlayerRankings(firestore, playerId) {
  try {
    const oldRankings = await getDocs(query(
      collection(firestore, rankingsCollection),
      where("playerId", "==", playerId),
    ));
    await Promise.all(
      oldRankings.docs
        .filter((oldDoc) => oldDoc.id !== playerId)
        .map((oldDoc) => deleteDoc(oldDoc.ref)),
    );
  } catch (error) {
    console.warn("[ranking] cleanup failed", error);
  }
}

export async function submitScore(playerName, score) {
  try {
    const firestore = getDb();
    if (!firestore) {
      return { ok: false, message: "Firebase \uC124\uC815\uC744 \uBA3C\uC800 \uB123\uC5B4\uC8FC\uC138\uC694." };
    }

    const safeName = String(playerName || "Mom").trim().slice(0, 12) || "Mom";
    const safeScore = Math.max(0, Math.floor(Number(score)) || 0);
    const playerId = getLocalPlayerId();

    await setDoc(doc(firestore, rankingsCollection, playerId), {
      playerId,
      name: safeName,
      score: safeScore,
      createdAt: serverTimestamp(),
    });
    await deletePreviousPlayerRankings(firestore, playerId);

    return { ok: true, message: "\uB7AD\uD0B9\uC5D0 \uB4F1\uB85D\uD588\uC5B4\uC694." };
  } catch (error) {
    console.warn("[ranking] submit failed", error);
    return { ok: false, message: "\uB7AD\uD0B9 \uC800\uC7A5\uC5D0 \uC2E4\uD328\uD588\uC5B4\uC694. \uAC8C\uC784\uC740 \uACC4\uC18D\uD560 \uC218 \uC788\uC5B4\uC694." };
  }
}

export async function loadRankings(count = 10) {
  try {
    const firestore = getDb();
    if (!firestore) {
      return { ok: false, rankings: [], message: "Firebase \uC124\uC815\uC744 \uBA3C\uC800 \uB123\uC5B4\uC8FC\uC138\uC694." };
    }

    const rankingQuery = query(
      collection(firestore, rankingsCollection),
      orderBy("score", "desc"),
      limit(count),
    );
    const snapshot = await getDocs(rankingQuery);
    const rankings = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return { ok: true, rankings, message: "" };
  } catch (error) {
    console.warn("[ranking] load failed", error);
    return { ok: false, rankings: [], message: "\uB7AD\uD0B9\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694. \uAC8C\uC784\uC740 \uACC4\uC18D\uD560 \uC218 \uC788\uC5B4\uC694." };
  }
}

window.submitScore = submitScore;
window.loadRankings = loadRankings;

function setStatus(message) {
  const status = document.querySelector("#rankingStatusText");
  if (status) status.textContent = message || "";
}

function renderRankingList(rankings) {
  const list = document.querySelector("#rankingList");
  if (!list) return;

  if (!rankings.length) {
    list.innerHTML = "<li>\uC544\uC9C1 \uB7AD\uD0B9\uC774 \uC5C6\uC5B4\uC694.</li>";
    return;
  }

  list.innerHTML = rankings
    .map((ranking) => `<li>${escapeHtml(ranking.name || "Mom")} \u00B7 ${Number(ranking.score || 0)}\uC810</li>`)
    .join("");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]);
}

export async function refreshRankings() {
  setStatus("\uB7AD\uD0B9\uC744 \uBD88\uB7EC\uC624\uB294 \uC911...");
  const result = await loadRankings();
  renderRankingList(result.rankings);
  setStatus(result.ok ? "" : result.message);
}

window.refreshRankings = refreshRankings;

function openRankingPopup() {
  const popup = document.querySelector("#rankingPopup");
  if (!popup) return;
  popup.classList.add("open");
  popup.setAttribute("aria-hidden", "false");
  startRankingAutoRefresh();
}

function closeRankingPopup() {
  const popup = document.querySelector("#rankingPopup");
  if (!popup) return;
  popup.classList.remove("open");
  popup.setAttribute("aria-hidden", "true");
  stopRankingAutoRefresh();
}

function startRankingAutoRefresh() {
  refreshRankings();
  if (rankingTimer) return;
  rankingTimer = window.setInterval(refreshRankings, rankingRefreshMs);
}

function stopRankingAutoRefresh() {
  if (!rankingTimer) return;
  window.clearInterval(rankingTimer);
  rankingTimer = null;
}

document.querySelector("#rankingRefreshButton")?.setAttribute("hidden", "");
document.querySelector("#rankingButton")?.addEventListener("click", openRankingPopup);
document.querySelector("#rankingCloseButton")?.addEventListener("click", closeRankingPopup);
document.querySelector("#rankingSubmitButton")?.addEventListener("click", async () => {
  const name = document.querySelector("#rankingNameInput")?.value || "Mom";
  const score = getLocalScore();
  setStatus("\uB7AD\uD0B9\uC5D0 \uB4F1\uB85D\uD558\uB294 \uC911...");
  const result = await submitScore(name, score);
  setStatus(result.message);
  if (result.ok) refreshRankings();
});
