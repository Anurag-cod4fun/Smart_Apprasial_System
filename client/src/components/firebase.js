import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCM5Xd23pZFIProKUbk50g18UcPHJu4ZCA",
    authDomain: "employee-appraisal-system.firebaseapp.com",
    projectId: "employee-appraisal-system",
    storageBucket: "employee-appraisal-system.appspot.com",
    messagingSenderId: "104435205983",
    appId: "1:104435205983:web:92554e344d51901b9158ea",
    measurementId: "G-W3WCLNG8J1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)