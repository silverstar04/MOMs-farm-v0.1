import { getApp, getApps, initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyD0WQXZ5I3SYGICi4GfpwV8kFT3IqsbWzs",
  authDomain: "moms-farm.firebaseapp.com",
  projectId: "moms-farm",
  storageBucket: "moms-farm.firebasestorage.app",
  messagingSenderId: "842738034459",
  appId: "1:842738034459:web:a6f3fc23b1d81b5fd555be",
  measurementId: "G-EG8YXS7B6W",
};

export function isFirebaseConfigured() {
  return Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId);
}

export function getFirebaseApp() {
  if (!isFirebaseConfigured()) return null;
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}

export function getFirebaseAuth() {
  const app = getFirebaseApp();
  return app ? getAuth(app) : null;
}

export function getFirebaseDb() {
  const app = getFirebaseApp();
  return app ? getFirestore(app) : null;
}
