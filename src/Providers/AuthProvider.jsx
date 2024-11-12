import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // const createUser = (email, password) => {
  //   return createUserWithEmailAndPassword(auth, email, password);
  // };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUSer) => {
      console.log("Current user", currentUSer);
      setUser(currentUSer);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  // onAuthStateChanged(auth, (currentUsr) => {
  //   if (currentUsr) {
  //     console.log("Currently logged in --", currentUsr);
  //     setUser(currentUsr);
  //   } else {
  //     console.log("No user logged in!");
  //     setUser(null);
  //   }
  // });

  const authInfo = {
    user,
    createUser,
    loading,
    signInUser,
    signInWithGoogle,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {/* Main part who will have access to this context */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

/**
 * 1. create context with null as default
 * 2. create provider
 * 3. set a value with something we use-->>(authInfo)
 * 4. [attention please...!!!!]
 * 5. Use the authProvider in the main.jsx
 * 6. access the children inside the authProvider in the main.jsx
 */
