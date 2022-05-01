import {
  addDoc,
  doc,
  updateDoc,
  collection,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";

const updateScore = async (score: number, email: any) => {
  try {
    const users = collection(db, "users");
    const usersData = await getDocs(users);
    let userDocID: string = "";
    usersData.docs.forEach((doc) => {
      if (doc.data().email === email) {
        userDocID = doc.id;
      }
    });
    const userDoc = doc(db, "users", userDocID);
    const userData: any = await (await getDoc(userDoc)).data();
    await updateDoc(userDoc, {
      score: userData.score + score,
    });
  } catch (error) {
    console.log(error);
  }
};

export { updateScore };
