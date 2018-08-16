import firebase from 'firebase'; 

// Initialize Firebase
export const config = {
    apiKey: "AIzaSyA1eP6TjdIDyeQnT-1eXD33VasSh93LYXE",
    authDomain: "react-notes-b62ec.firebaseapp.com",
    databaseURL: "https://react-notes-b62ec.firebaseio.com",
    projectId: "react-notes-b62ec",
    storageBucket: "react-notes-b62ec.appspot.com",
    messagingSenderId: "274109552634"
  };
  const fire = firebase.initializeApp(config);
  export default fire;