import { useNavigate, Link } from "react-router-dom";
import { useAuth, useQuiz } from "../../context";
import style from "./navbar.module.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
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
        <Link to="/quizboard">
          <i className="fas fa-chart-bar white"></i>
        </Link>
        {user.accessToken ? (
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
