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
    const leaderBoardDB = collection(db, "leaderBoard");
    const leaderBoardData = await getDocs(leaderBoardDB);
    let userDocID: string = "";
    leaderBoardData.docs.forEach((doc) => {
      if (doc.data().email === email) {
        userDocID = doc.id;
      }
    });
    if (userDocID) {
      const userDoc = doc(db, "leaderBoard", userDocID);
      const userData:any = await (await getDoc(userDoc)).data();
      await updateDoc(userDoc, {
        score:userData.score+score,
      });
    } else {
      await addDoc(collection(db, "leaderBoard"), {
        email: email,
        score: score,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export { updateScore };
