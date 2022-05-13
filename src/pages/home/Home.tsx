import style from "./home.module.css";
import hero from "../../asset/hero.webp";
import ferrariHero from "../../asset/ferrari-hero.webp";
import netflixHero from "../../asset/netflix-hero.webp";
import { quizData } from "../../data/quiz-data";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context";
const Home: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  return (
    <main className="background">
      <div className={style["hero-container"]}>
        <div className={style["hero-image"]}>
          <img src={hero} alt="hero" />
        </div>
      </div>
      <h2 className="centered-text font-color">Featured Categories</h2>
      <div className={style["featured-container"]}>
        <div
          className={`${style["card-container"]} ${
            theme === "light" ? "box-shadow-light" : ""
          }`}
        >
          <div className="card-image-basic background">
            <img src={ferrariHero} alt="ferrari" />
          </div>
          <div className="card-heading">
            <div className="padding-l-r-16-b-5 heading background  font-color">
              Ferrari
            </div>
          </div>
          <div className="card-typography fluid-y">
            <div className="card-body padding-l-r-16-b-5 background font-color">
              <p className="background font-color">
                Take this quiz to test yourself
              </p>
              <p className="background font-color">5 questions</p>
            </div>
          </div>
          <div className="card-footer-basic fluid-x background">
            <button
              className={`${style["footer-btn"]} btn btn-primary`}
              onClick={() => navigate(`/rules?categoryId=${quizData[0].categoryID}`)}
            >
              Play Now
            </button>
          </div>
        </div>
        <div
          className={`${style["card-container"]} ${
            theme === "light" ? "box-shadow-light" : ""
          }`}
        >
          <div className="card-image-basic background">
            <img src={netflixHero} alt="netflix" />
          </div>
          <div className="card-heading">
            <div className="padding-l-r-16-b-5 heading background font-color">
              Netflix
            </div>
          </div>
          <div className="card-typography fluid-y">
            <div className="card-body padding-l-r-16-b-5 background">
              <p className="background font-color">
                Take this quiz to test yourself
              </p>
              <p className="background font-color">5 questions</p>
            </div>
          </div>
          <div className="card-footer-basic fluid-x background">
            <button
              className={`${style["footer-btn"]} btn btn-primary`}
              onClick={() => navigate(`/rules?categoryId=${quizData[1].categoryID}`)}
            >
              Play now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
