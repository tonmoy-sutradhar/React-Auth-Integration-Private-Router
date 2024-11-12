import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const name = "Tonmoy sutradhar";

  // const createUser = (email, password) => {
  //   return createUserWithEmailAndPassword(auth, email, password);
  // };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUSer) => {
      console.log("Current user", currentUSer);
      setUser(currentUSer);
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
    name,
    user,
    createUser,
    signInUser,
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
