// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGbUlfmOuCCc-ubJFFi09KAax2n92doN8",
    authDomain: "git-viewer-aefe4.firebaseapp.com",
    projectId: "git-viewer-aefe4",
    storageBucket: "git-viewer-aefe4.appspot.com",
    messagingSenderId: "983369663716",
    appId: "1:983369663716:web:7e47f31cc7afd1654d58f1",
    measurementId: "G-M8ZHK8RC52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);