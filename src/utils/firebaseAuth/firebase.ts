// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCpixD0QmQ3iqA-G2G7_5ZDgNOsRLqqjNg",
	authDomain: "ilearn-app-4f00b.firebaseapp.com",
	projectId: "ilearn-app-4f00b",
	storageBucket: "ilearn-app-4f00b.appspot.com",
	messagingSenderId: "161045286532",
	appId: "1:161045286532:web:e667ddc2290616c3d0fcd1",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = async () =>
	await signInWithPopup(auth, provider);
export const db = getFirestore();
