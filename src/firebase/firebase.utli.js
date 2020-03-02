import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBqxVzpFlPC8oU2RGRYPzwuu3_MRxtyekI",
  authDomain: "myntraclone-79b70.firebaseapp.com",
  databaseURL: "https://myntraclone-79b70.firebaseio.com",
  projectId: "myntraclone-79b70",
  storageBucket: "myntraclone-79b70.appspot.com",
  messagingSenderId: "218630674359",
  appId: "1:218630674359:web:9ee808e738d6126c85fa32",
  measurementId: "G-D9R00XSKPV"
};
//storing the user loging
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
      console.log("error creating user", error.message);
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
