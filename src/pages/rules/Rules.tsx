import {  useNavigate, useSearchParams } from "react-router-dom";
import styles from "./rules.module.css";

const Rules: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams,setSearchParams] = useSearchParams();
    const id = searchParams.get("categoryId");
  return (
    <div className={styles["container"]}>
      <h2>Quiz Rules:</h2>
      <ol className={styles["list"]}>
        <li>There are 5 questions in total</li>
        <li>You will have 15 seconds to attend each question</li>
        <li>Each question carries one mark</li>
        <li>There won't be negative marking for wrong answer</li>
        <li>
          You won't be able to go back to previous questions after attempting
        </li>
        <li>Click Submit to complete the quiz</li>
      </ol>
      <button className="btn btn-primary" onClick={() => navigate(`/quiz/${id}`)}>Start Quiz</button>
    </div>
  );
};

export default Rules;
