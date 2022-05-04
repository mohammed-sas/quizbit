import { useAuth, useQuiz } from "../../context";
import style from "./result.module.css";
import { updateScore } from "../../services/updateScore";
import { useEffect } from "react";
const Result = () => {
  const {
    quizState: { answeredQuestions, questions },
  } = useQuiz();
  const {user} = useAuth();
  const checkIfSelected = (id: string, option: string): boolean => {
    return answeredQuestions.some((question) => {
      if (question.questionID === id && question.option === option) {
        return true;
      } else {
        return false;
      }
    });
  };
  const calculateScore=():number=>{
    return answeredQuestions.reduce((acc,curr)=>curr.isRight? acc+10 : acc,0);
  }
  useEffect(()=>{
    let score:number = calculateScore();
    updateScore(score,user.email);
  },[])
  return (
    <main className={style["result-container"]}>
      <h1 className="centered-text font-color">Result</h1>
      <h3 className="centered-text font-color">Your score : {calculateScore()}/50</h3>
      {questions.map((question) => {
        return (
          <div key={question.questionID} className={style["quiz-body"]}>
            <div className={style["question-container"]}>
              <p>{question.statement}</p>
            </div>
            <div className={style["options-container"]}>
              {question.options.map((option) => {
                return (
                  <label
                    key={option.option}
                    className={`${style["option-item"]}  ${option.isRight ? style["success"]:""} ${
                      checkIfSelected(question.questionID, option.option) &&
                      !option.isRight
                        ? style["fail"]
                        : ""
                    }`}
                  >
                    <span>
                      {" "}
                      <input
                        type="radio"
                        name="question1"
                        defaultValue={option.option}
                      />{" "}
                      {option.option}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Result;
