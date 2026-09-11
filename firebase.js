import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, getDocs, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";
const ready = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId); let auth, db;
if (ready) { const app = initializeApp(firebaseConfig); auth = getAuth(app); db = getFirestore(app); }
export const firebaseReady = ready;
export const observeAuth = callback => ready ? onAuthStateChanged(auth, callback) : callback(null);
export const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const loginWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider());
export const logout = () => signOut(auth);
export const saveProfile = user => setDoc(doc(db, "users", user.uid), { email: user.email, updatedAt: serverTimestamp() }, { merge: true });
export async function loadProgress(uid) { const result = await getDoc(doc(db, "progress", uid)); return result.exists() ? result.data().state : null; }
export const saveProgress = (uid, state) => setDoc(doc(db, "progress", uid), { state, updatedAt: serverTimestamp() });
export const isAdmin = user => user?.email === "polockevan@gmail.com";
export async function adminOverview() { const [users, progress] = await Promise.all([getDocs(collection(db, "users")), getDocs(collection(db, "progress"))]); const states = new Map(progress.docs.map(item => [item.id, item.data().state])); return users.docs.map(item => ({ uid: item.id, ...item.data(), state: states.get(item.id) || {} })); }
