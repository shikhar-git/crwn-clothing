import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCp03WDEUrjyCsNtnKRc1O5A908HwPkjNk",
  authDomain: "crwn-db-ba8ed.firebaseapp.com",
  projectId: "crwn-db-ba8ed",
  storageBucket: "crwn-db-ba8ed.appspot.com",
  messagingSenderId: "945953875971",
  appId: "1:945953875971:web:53d98d796ced940ced0636",
  measurementId: "G-R88KRVRWK6",
};
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
        ...additionalData,
      });
    } catch (e) {
      console.log("error creating user", e.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
