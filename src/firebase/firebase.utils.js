import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBC0cRMHWz0uXejuSiAAO5ydKgnoACWz0U",
    authDomain: "crwn-db-82b28.firebaseapp.com",
    databaseURL: "https://crwn-db-82b28.firebaseio.com",
    projectId: "crwn-db-82b28",
    storageBucket: "crwn-db-82b28.appspot.com",
    messagingSenderId: "140751343129",
    appId: "1:140751343129:web:767d2788ce91d24a882488"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;