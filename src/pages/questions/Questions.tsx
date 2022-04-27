import { useState } from "react";
import { useParams } from "react-router-dom";
import style from "./questions.module.css";
import { quizData } from "../../data/quiz-data";
import { useEffect } from "react";

const Questions:React.FC = () => {
    const {categoryID} = useParams();
    const [category,setCategory] = useState(quizData.filter(category=>category.categoryID === categoryID)[0]);
    const [quesIndex,setQuesIndex]= useState<number>(0);
    const [currentQue,setCurrentQue]=useState(category.questions[quesIndex]);
    const [timer,setTimer] = useState<number>(15);
    useEffect(()=>{
        const id = setInterval(()=>setTimer(timer-1),1000);
        if(timer === 0){
            setTimer(15);
            setQuesIndex(quesIndex+1);
        }
        return ()=>clearInterval(id);
    });
  return (
    <main className={style["question-container"]}>
      <div className={style["timer-container"]}>
        <div className={style["timer"]}>
          <span>{timer}</span>
        </div>
      </div>
      <div className={style["quiz-header"]}>
        <span>Question: {quesIndex}/5</span>
        <span>Score : 0</span>
      </div>

      <div className={style["quiz-body"]}>
        <div className={style["question-container"]}>
          <span>Q{quesIndex+1}</span>
          <p>{currentQue.statement}</p>
        </div>
        <div className={style["options-container"]}>
            {
                currentQue.options.map(value=>{
                    return  <label key={value.option} className={style["option-item"]}>
                    <span>
                      {" "}
                      <input
                        type="radio"
                        name="question1"
                        value={value.option}
                      />{" "}
                      {value.option}
                    </span>
                  </label>
                })
            }
        </div>
      </div>
    </main>
  );
};

export default Questions;
