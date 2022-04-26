import style from "./home.module.css";
import hero from "../../asset/hero.webp";
import ferrariHero from "../../asset/ferrari-hero.webp";
import netflixHero from "../../asset/netflix-hero.webp";
const Home: React.FC = () => {
  return (
    <main className="bg-black">
      <div className={style["hero-container"]}>
        <div className={style["hero-image"]}>
          <img src={hero} alt="hero" />
        </div>
      </div>
      <h2 className="centered-text white">Featured Categories</h2>
      <div className={style["featured-container"]}>
        <div className={style["card-container"]}>
          <div className="card-image-basic bg-black">
            <img src={ferrariHero} alt="ferrari" />
          </div>
          <div className="card-heading">
            <div className="padding-l-r-16-b-5 heading bg-black white">
              Ferrari
            </div>
          </div>
          <div className="card-typography fluid-y">
            <div className="card-body padding-l-r-16-b-5 bg-black white">
              <p className="bg-black white">Take this quiz to test yourself</p>
              <p className="bg-black white">5 questions</p>
            </div>
          </div>
          <div className="card-footer-basic fluid-x bg-black">
            <button className={`${style["footer-btn"]} btn btn-primary`}>
              Play Now
            </button>
          </div>
        </div>
        <div className="card-container ">
          <div className="card-image-basic bg-black">
            <img src={netflixHero} alt="netflix" />
          </div>
          <div className="card-heading">
            <div className="padding-l-r-16-b-5 heading bg-black white">
              Netflix
            </div>
          </div>
          <div className="card-typography fluid-y">
            <div className="card-body padding-l-r-16-b-5 bg-black">
              <p className="bg-black white">Take this quiz to test yourself</p>
              <p className="bg-black white">5 questions</p>
            </div>
          </div>
          <div className="card-footer-basic fluid-x bg-black">
            <button className={`${style["footer-btn"]} btn btn-primary`}>
              Play now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
