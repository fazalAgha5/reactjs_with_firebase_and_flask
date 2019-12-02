import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDAwqOSvOd-drqiGrN6DwR8YuuV-LI7t2I",
    authDomain: "loginisystematic.firebaseapp.com",
    databaseURL: "https://loginisystematic.firebaseio.com",
    projectId: "loginisystematic",
    storageBucket: "loginisystematic.appspot.com",
    messagingSenderId: "186683452526",
    appId: "1:186683452526:web:084d9e7c6dcff8ea538a7f",
    measurementId: "G-TRB1WM6W4T"
  };
  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;