import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import style from "./navbar.module.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const loginHandler = () => {
    navigate("/login");
  };
  const logoutHandler=async ()=>{
      try{
        await  logout();
      }catch(error){
          console.log(error);
      }
  }
  return (
    <nav>
      <div className={style["nav-brand"]}>
        <h2 className="white">QUIZBIT</h2>
      </div>
      <div className={style["nav-links"]}>
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
