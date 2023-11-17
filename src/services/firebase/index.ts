import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB77iT-HvAqe3YM6ZoA7__K6kmAA-gtKGI",
    authDomain: "smart-videos-365613.firebaseapp.com",
    projectId: "smart-videos-365613",
    storageBucket: "smart-videos-365613.appspot.com",
    messagingSenderId: "144382331424",
    appId: "1:144382331424:web:2ae7fe0f06b3ca3be5ca45"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({   
    prompt : "select_account "
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);