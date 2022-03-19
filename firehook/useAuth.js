import React, { createContext, useContext, useEffect, useState } from "react";
import firebase from "../firebase";
import { useLinkTo } from "@react-navigation/native";
const AuthContext = createContext({});

export const AuthProvider = ({ children, navigation }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const unsub = firebase.auth().onAuthStateChanged((user) => {
      console.log("user", user);
      if (user) {
        //logged in...
        setUser(user);
        
      } else {
        //Not logged in...
        setUser(null);
      }
      setLoadingInitial(false);
    });
    return unsub();
  }, []);


  return (
    <AuthContext.Provider
      value={{
        user,
        loadingInitial,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
