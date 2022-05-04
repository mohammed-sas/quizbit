import { useNavigate, Link } from "react-router-dom";
import { useAuth, useQuiz, useTheme } from "../../context";
import style from "./navbar.module.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { theme,setTheme } = useTheme();
  const { user, logout } = useAuth();
  const { quizDispatch } = useQuiz();
  const loginHandler = () => {
    navigate("/login");
  };
  const logoutHandler = async () => {
    try {
      await logout();
      quizDispatch({ type: "RESET", payload: null });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav>
      <div className={style["nav-brand"]} onClick={() => navigate("/")}>
        <h2 className="white">QUIZBIT</h2>
      </div>
      <div className={style["nav-links"]}>
        {theme === "dark" ? (
          <i className="fas fa-sun white" onClick={()=>setTheme("light")}></i>
        ) : (
          <i className="fas fa-moon white" onClick={()=>setTheme("dark")}></i>
        )}
        <Link to="/quizboard">
          <i className="fas fa-medal white"></i>
        </Link>
        {user.email ? (
          <button className="btn btn-primary" onClick={logoutHandler}>
            Logout
          </button>
        ) : (
          <button className="btn btn-primary" onClick={loginHandler}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
