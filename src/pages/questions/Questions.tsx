import style from "./questions.module.css";

const Questions = () => {
  return (
    <main>
      <div className={style["timer-container"]}>
        <div className={style["timer"]}>
          <span>15</span>
        </div>
      </div>
      <div className={style["quiz-header"]}>
        <span>Question: 1/5</span>
        <span>Score : 0</span>
      </div>

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

export default Questions;
