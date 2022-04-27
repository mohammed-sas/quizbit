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
type User = {
  email: string|null;
  accessToken: string|null;
};
interface ReturnType {
  user: User;
  login: (email: string, password: string) => void;
  logout: () => void;
  signup: (email: string, password: string) => void;
}

const AuthContext = createContext<ReturnType>({
  user: { email: "", accessToken: "" },
  login: () => {},
  logout: () => {},
  signup: () => {},
});

const AuthProvider = ({ children }: Props) => {
  const value = useAuthProvider();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthProvider = (): ReturnType => {
  const [user, setUser] = useState<User>({
    email: "",
    accessToken: "",
  });
  const login = async (email: string, password: string) => {
    try {
      const response: any = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser({
        email: response.user.email,
        accessToken: response.user.accessToken,
      });
      localStorage.setItem("token", JSON.stringify(response.user.accessToken));
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await login(email,password);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      signOut(auth);
      setUser({
        email:"",
        accessToken:""
      })
      localStorage.setItem("token", "");
    } catch (error) {
      console.log(error);
    }
  };

  return { user, login, logout, signup };
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
