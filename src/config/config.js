import firebase from 'firebase/app'; 
  // Initialize Firebase
export const DB_CONFIG = {
    apiKey: "AIzaSyA1eP6TjdIDyeQnT-1eXD33VasSh93LYXE",
    authDomain: "react-notes-b62ec.firebaseapp.com",
    databaseURL: "https://react-notes-b62ec.firebaseio.com",
    projectId: "react-notes-b62ec",
    storageBucket: "react-notes-b62ec.appspot.com",
    messagingSenderId: "274109552634"
  };
  const fire = firebase.initializeApp(DB_CONFIG);
  export default fire;