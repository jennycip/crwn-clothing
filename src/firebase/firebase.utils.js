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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;