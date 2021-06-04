import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCARsLHVHhhMu6rk5Du6cWhjunNwHTlL0Y",
  authDomain: "drive-832f8.firebaseapp.com",
  projectId: "drive-832f8",
  storageBucket: "drive-832f8.appspot.com",
  messagingSenderId: "757004453491",
  appId: "1:757004453491:web:f383d7ccece952aaeccc06",
  measurementId: "G-GVDF0SN0ZH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth, provider, db, storage };
