import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const getQuizboard = async () => {
  const quizboardDB = collection(db, "leaderBoard");
  const quizboardData = await getDocs(quizboardDB);
  let data: any[] = [];
  quizboardData.docs.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
};

export { getQuizboard };
