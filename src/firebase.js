import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAgnPeV26Hagf32gNdMXE1MjJ_jDditLD0",
    authDomain: "instagram-clone-react-1d845.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-1d845.firebaseio.com",
    projectId: "instagram-clone-react-1d845",
    storageBucket: "instagram-clone-react-1d845.appspot.com",
    messagingSenderId: "527559689122",
    appId: "1:527559689122:web:ce8e4768de3798087068fb",
    measurementId: "G-QM3X7K2V9J"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage};