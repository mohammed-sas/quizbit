import { addDoc, doc, updateDoc ,collection, getDocs} from "firebase/firestore";
import { db} from "../firebase";


const updateScore=async (score:number,email:any)=>{
    try{
        const leaderBoardRef = collection(db,"leaderBoard");
        const leaderBoardData = await getDocs(leaderBoardRef);
        leaderBoardData.docs.forEach(doc=>{
            console.log(doc);
        })
        await addDoc(collection(db, "scoreboard"), {
            email: email,
            score: score
          });

    }catch(error){
        console.log(error);
    }


}

export {updateScore};