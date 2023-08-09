import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC_pKqz7auUXAiPU5Yu_uCfs0A1bldJhoY",
    authDomain: "pomodoro-b8799.firebaseapp.com",
    projectId: "pomodoro-b8799",
    storageBucket: "pomodoro-b8799.appspot.com",
    messagingSenderId: "246311935149",
    appId: "1:246311935149:web:75d51354660db7dcd27a24",
    measurementId: "G-G58VNSL0L4"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };