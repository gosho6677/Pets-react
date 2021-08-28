import firebase from 'firebase/app';
import 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC57l07pk8nFXi8ICpa3w3aveSSpQp_MJE",
    authDomain: "react-my-pets-45d89.firebaseapp.com",
    projectId: "react-my-pets-45d89",
    storageBucket: "react-my-pets-45d89.appspot.com",
    messagingSenderId: "852957130169",
    appId: "1:852957130169:web:4ab5ee9472c41c38c81a68"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();