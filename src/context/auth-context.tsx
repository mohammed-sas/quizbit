import { createContext, ReactNode } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { useContext } from "react";
import { useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";

type Props = {
  children: ReactNode;
};
type User = {
  email: string | null;
  score: number;
  name: string;
};
interface ReturnType {
  user: User;
  login: (email: string, password: string) => void;
  logout: () => void;
  signup: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => void;
}

const AuthContext = createContext<ReturnType>({
  user: {} as User,
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
    score: 0,
    name: "",
  });
  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const userRef = collection(db, "users");
      const usersData = await getDocs(userRef);
      usersData.forEach(async (doc) => {
        if (doc.data().email === email) {
          let data:any = await doc.data();
          setUser(data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // setUser({
      //   email: response.user.email,
      // });
      const signedUpUser = {
        email,
        name: `${firstName} ${lastName}`,
        score: 0,
      };
      const newUser = await addDoc(collection(db, "users"), signedUpUser);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      signOut(auth);
      setUser({
        email:"",
        score:0,
        name:""
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { user, login, logout, signup };
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
