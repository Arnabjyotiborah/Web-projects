import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyAOP2qwjugDWf_-LtNgzfhTWWwmrHJBo4A",
    authDomain: "mydrive-16872.firebaseapp.com",
    projectId: "mydrive-16872",
    storageBucket: "mydrive-16872.appspot.com",
    messagingSenderId: "288701989137",
    appId: "1:288701989137:web:6516f1253ba7c07da3ccb0"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,storage,auth,provider}