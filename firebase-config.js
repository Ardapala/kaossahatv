const firebaseConfig = {
  apiKey: "AIzaSyDNZeXEPmSimqrokiXEwF3ywYPR592Ump4",
  authDomain: "kaossahatvcanliyayin.firebaseapp.com",
  projectId: "kaossahatvcanliyayin",
  storageBucket: "kaossahatvcanliyayin.firebasestorage.app",
  messagingSenderId: "1012199693173",
  appId: "1:1012199693173:web:636a2db41a0d90c148113c"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
