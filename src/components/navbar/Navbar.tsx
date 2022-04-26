
import { useNavigate } from 'react-router-dom';
import style from './navbar.module.css';

const Navbar:React.FC = () => {
    const navigate = useNavigate();

    const loginHandler=()=>{
        navigate("/login");
    }
    return (
        <nav>
        <div className={style["nav-brand"]}>
            <h2 className="white">QUIZ</h2>
        </div>
        <div className={style["nav-links"]}>
            <button className="btn btn-primary" onClick={loginHandler}>Login</button>
        </div>
    </nav>
    )
}

export default Navbar
