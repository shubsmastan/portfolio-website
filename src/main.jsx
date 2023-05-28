import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyCFlxyCZugVYG0W-lG51fluGtxWw5ka1N8",
  authDomain: "shubs-mastan-developer.firebaseapp.com",
  projectId: "shubs-mastan-developer",
  storageBucket: "shubs-mastan-developer.appspot.com",
  messagingSenderId: "269792514677",
  appId: "1:269792514677:web:c03d4e2f476e81362c9e3c",
  measurementId: "G-7ZBTB8B3QF",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
