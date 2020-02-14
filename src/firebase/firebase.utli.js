 import  firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';


 const  config ={
    apiKey: "AIzaSyBqxVzpFlPC8oU2RGRYPzwuu3_MRxtyekI",
    authDomain: "myntraclone-79b70.firebaseapp.com",
    databaseURL: "https://myntraclone-79b70.firebaseio.com",
    projectId: "myntraclone-79b70",
    storageBucket: "myntraclone-79b70.appspot.com",
    messagingSenderId: "218630674359",
    appId: "1:218630674359:web:9ee808e738d6126c85fa32",
    measurementId: "G-D9R00XSKPV"

}
  
firebase.initializeApp(config)
export const  auth =firebase.auth();
export  const firestore =firebase.firestore();


  

const  provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;