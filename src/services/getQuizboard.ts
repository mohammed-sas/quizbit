import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const getQuizboard = async () => {
  const usersDB = collection(db, "users");
  const quizboardData = await getDocs(usersDB);
  let data: any[] = [];
  quizboardData.docs.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
};

export { getQuizboard };
