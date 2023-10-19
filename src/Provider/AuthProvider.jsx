/* eslint-disable react/prop-types */
// @ts-nocheck
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../config/firebaseConfig";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  // google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authentications = {
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authentications}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
