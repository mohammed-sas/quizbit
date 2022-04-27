import style from './result.module.css';
const Result = () => {
  return (
    <main className={style["result-container"]}>
      <h1 className="centered-text white">Result</h1>
      <h3 className="centered-text white">Your score : 2/5</h3>
      <div className={style["quiz-body"]}>
        <div className={style["question-container"]}>
          <span>Q1</span>
          <p>Which Ferrari driver has the most world championship wins?</p>
        </div>
        <div className={style["options-container"]}>
          <label className={style["option-item"]}>
            <span>
              {" "}
              <input
                type="radio"
                name="question1"
                value="Michael Schumacher"
              />{" "}
              Michael Schumacher
            </span>
          </label>
          <label className={style["option-item"]}>
            <span>
              {" "}
              <input
                type="radio"
                name="question1"
                value="Sebastian Vettel"
              />{" "}
              Sebastian Vettel
            </span>
          </label>
          <label className={style["option-item"]}>
            <span>
              {" "}
              <input type="radio" name="question1" value="Niki Lauda" /> Niki
              Lauda
            </span>
          </label>
          <label className={style["option-item"]}>
            <span>
              {" "}
              <input
                type="radio"
                name="question1"
                value="Alberto Ascari"
              />{" "}
              Alberto Ascari
            </span>
          </label>
        </div>
      </div>
    </main>
  );
};

export default Result;
