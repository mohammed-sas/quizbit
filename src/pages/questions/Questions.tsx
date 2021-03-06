import style from "./questions.module.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { quizData } from "../../data/quiz-data";
import { useQuiz, useTheme } from "../../context";

const Questions: React.FC = () => {
  let { categoryID } = useParams();
  const { theme } = useTheme();
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
          answeredQuestions: [],
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
  }, [timer]);
  const selectQuestionHandler = (
    questionID: string,
    value: string,
    isRight: boolean
  ): void => {
    quizDispatch({
      type: "SELECTED",
      payload: { questionID, option: value, isRight },
    });
    setTimer(15);
    if (quizState.currentIndex === quizState.questions.length - 1) {
      navigate("/result");
      return;
    }
    quizDispatch({ type: "NEXT_QUES", payload: null });
  };
  return quizState.currentQues ? (
    <main className={style["question-container"]}>
      <div className={style["timer-container"]}>
        <div className={style["timer"]}>
          <span>{timer}</span>
        </div>
      </div>
      <div className={style["quiz-header"]}>
        <span>Question: {quizState.currentIndex + 1}/5</span>
      </div>

      <div className={style["quiz-body"]}>
        <div className={style["questions"]}>
          <span>Q{quizState.currentIndex + 1}</span>
          <p>{quizState.currentQues.statement}</p>
        </div>
        <div className={style["options-container"]}>
          {quizState.currentQues.options.map((value) => {
            return (
              <label
                key={value.option}
                className={`${style["option-item"]} ${
                  theme === "light" ? "box-shadow-light" : ""
                }`}
                onClick={() =>
                  selectQuestionHandler(
                    quizState.currentQues.questionID,
                    value.option,
                    value.isRight
                  )
                }
              >
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
  ) : (
    <h2>Loading... </h2>
  );
};

export default Questions;
