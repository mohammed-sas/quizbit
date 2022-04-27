import style from "./questions.module.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { quizData } from "../../data/quiz-data";
import { useQuiz } from "../../context";

const Questions: React.FC = () => {
  const { categoryID } = useParams();
  const { quizState, quizDispatch } = useQuiz();
  const navigate = useNavigate();
  const [timer, setTimer] = useState<number>(15);
  useEffect(() => {
    const fetchQuestion = () => {
      let questions = quizData.filter(
        (category) => category.categoryID === categoryID
      )[0].questions;
      quizDispatch({
        type: "INITIAL_STATE",
        payload: {
          questions: questions,
          currentQues: questions[0],
          currentIndex: 0,
        },
      });
    };
    fetchQuestion();
  }, [categoryID]);
  useEffect(() => {
    const id = setInterval(() => setTimer(timer - 1), 1000);
    if (timer === -1) {
      setTimer(15);
      if (quizState.currentIndex === quizState.questions.length - 1) {
        navigate("/result");
        return;
      }
      quizDispatch({ type: "NEXT_QUES", payload: null });
    }
    return () => clearInterval(id);
  },[timer]);
  return (
    <main className={style["question-container"]}>
      <div className={style["timer-container"]}>
        <div className={style["timer"]}>
          <span>{timer}</span>
        </div>
      </div>
      <div className={style["quiz-header"]}>
        <span>Question: {quizState.currentIndex + 1}/5</span>
        <span>Score : 0</span>
      </div>

      <div className={style["quiz-body"]}>
        <div className={style["question-container"]}>
          <span>Q{quizState.currentIndex + 1}</span>
          <p>{quizState.currentQues.statement}</p>
        </div>
        <div className={style["options-container"]}>
          {quizState.currentQues.options.map((value) => {
            return (
              <label key={value.option} className={style["option-item"]}>
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
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Questions;
