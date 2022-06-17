import React from "react";
import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isauth, setisauth] = useState(false);
  const [token,settoken] = useState("")
  let toggleAuth = () => {
    if (!isauth) {
      axios
        .post("https://reqres.in/api/login", {
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        })
        .then((r) => {
         settoken(r.data.token)
          setisauth(true)
        });
    }else{
     setisauth(false)
    }
  };

  return (
    <AuthContext.Provider value={{ toggleAuth,isauth,token }}>
      {children}
    </AuthContext.Provider>
  );
};
