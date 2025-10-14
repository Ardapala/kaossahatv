const firebaseConfig = {
  apiKey: "SENIN_API_KEY",
  authDomain: "SENIN_PROJECT.firebaseapp.com",
  projectId: "SENIN_PROJECT_ID",
  storageBucket: "SENIN_PROJECT.appspot.com",
  messagingSenderId: "SENIN_SENDER_ID",
  appId: "SENIN_APP_ID"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
