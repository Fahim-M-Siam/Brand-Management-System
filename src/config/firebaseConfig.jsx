import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmztdJ06xN4e4iKSJKZYusaxYIvW_4bYg",
  authDomain: "speedy-wrench-project.firebaseapp.com",
  projectId: "speedy-wrench-project",
  storageBucket: "speedy-wrench-project.appspot.com",
  messagingSenderId: "194642551141",
  appId: "1:194642551141:web:be030cc0cfd29a31ec418c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
