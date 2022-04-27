import { useQuiz } from "../../context";
import style from "./result.module.css";
const Result = () => {
  const {
    quizState: { answeredQuestions, questions },
  } = useQuiz();
  const check = (id: string, option: string): boolean => {
    return answeredQuestions.some((question) => {
      if (question.questionID === id && question.option === option) {
        return true;
      } else {
        return false;
      }
    });
  };
  const calculateScore=():number=>{
    return answeredQuestions.reduce((acc,curr)=>curr.isRight? acc+1 : acc,0);
  }
  return (
    <main className={style["result-container"]}>
      <h1 className="centered-text white">Result</h1>
      <h3 className="centered-text white">Your score : {calculateScore()}/5</h3>
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
                      check(question.questionID, option.option) &&
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
