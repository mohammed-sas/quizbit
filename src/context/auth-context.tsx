import { createContext, ReactNode } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { useState } from "react";

type Props = {
  children: ReactNode;
};
type User={
  email:string,
  token:string
}
interface ReturnType {
  user:User,
  login: (email: string, password: string) => void;
  logout: () => void;
  signup: (email: string, password: string) => void;
}

const AuthContext = createContext<ReturnType>({
  user:{email:"",token:""},
  login: () => {},
  logout: () => {},
  signup: () => {},
});

const AuthProvider = ({ children }: Props) => {
  const value = useAuthProvider();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthProvider = (): ReturnType => {
  const [user,setUser]= useState<User>({
    email:"",
    token:""
  });
  const login = async (email: string, password: string) => {
    try {
      const response:any = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      setUser({
        email:response.user.email,
        token:response.user.accessToken
      })
      localStorage.setItem("token",JSON.stringify(response.user.accessToken));
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    signOut(auth);
  };

  return {user, login, logout, signup };
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
