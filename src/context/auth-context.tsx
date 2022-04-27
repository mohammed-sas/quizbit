import React, { createContext, ReactNode } from "react";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

type Props = {
  children: ReactNode;
};
interface ReturnType{
    login:(email:string,password:string)=>void,
    logout:()=>void,
    signup:(email:string,password:string)=>void
}

const AuthContext = createContext<ReturnType>({
    login:()=>{},
    logout:()=>{},
    signup:()=>{}

});

const AuthProvider = ({ children }:Props) => {
  const value = useAuthProvider();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthProvider= ():ReturnType => {
  const [user, setUser] = useState();

  const login = async (email: string, password: string) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const signup=async(email:string,password:string)=>{
      try{
        const response = await createUserWithEmailAndPassword(auth,email,password);
        console.log(response);
      }catch(error){
          console.log(error);
      }
  }

  const logout = () => {
    signOut(auth);
  };

  return { login, logout,signup };
};

const useAuth = ():ReturnType => useAuth(AuthContext);

export { AuthProvider, useAuth };
