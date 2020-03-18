import firebase from 'firebase';

  // Your web app's Firebase configuration
  const config = {
    apiKey: "AIzaSyAYzeOmKOk5adpLs9VF4CkpSFK-wZTESac",
    authDomain: "splittab-fb51c.firebaseapp.com",
    databaseURL: "https://splittab-fb51c.firebaseio.com",
    projectId: "splittab-fb51c",
    storageBucket: "splittab-fb51c.appspot.com",
    messagingSenderId: "343941227880",
    appId: "1:343941227880:web:694d455d556f9c4945a2dd"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(config);


export default firebase;