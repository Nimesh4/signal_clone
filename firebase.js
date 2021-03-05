import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA9l-tvnapxRIXvjbkAh-QYO5BcAi63f9w",
    authDomain: "signal-clone-d93e9.firebaseapp.com",
    projectId: "signal-clone-d93e9",
    storageBucket: "signal-clone-d93e9.appspot.com",
    messagingSenderId: "204690439987",
    appId: "1:204690439987:web:250ba4e0e30ec156384846",
    measurementId: "G-NWRFK6H56J"
  };

  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  }else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export {db, auth};
