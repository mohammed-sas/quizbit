import style from "./login.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import {UserLogin} from '../model';
const Login: React.FC = () => {
    const [user,setUser] = useState<UserLogin>({
        email:"",
        password:""
    });
  const handleChange = (e:React.ChangeEvent<HTMLInputElement> ) => {
    const {name,value} = e.target;
    setUser({
        ...user,
        [name]:value
    })
  };
  const guestHandler = () => {};
  const submitHandler =async (e:React.FormEvent) => {
      try{
        e.preventDefault();
      }catch(error){
          console.log(error);
      }
  };
  return (
    <main className={style["login-container"]}>
      <div className={style["login-form-container"]}>
        <h2 className="centered-text white">Login</h2>
        <form
          action="post"
          className={style["login-form"]}
          onSubmit={submitHandler}
        >
          <label htmlFor="email" className="white">
            <span className="white">Email address</span>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="abc@neog.com"
            />
          </label>

          <label htmlFor="password" className="text-white">
            <span className="white">Password</span>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="*******"
            />
          </label>

          <div className={style["remember-me-container"]}>
            <label htmlFor="remember-me" className="text-white">
              <input className={style["remember-me"]} type="checkbox" />{" "}
              Remember me
            </label>
            <span>
              <a href="" className="text-primary">
                Forgot Your Password?
              </a>
            </span>
          </div>
          <input type="submit" value="Login" className="btn btn-primary" />
          <button className="btn btn-secondary" onClick={guestHandler}>
            Login as Guest
          </button>
          <div>
            <p className="centered-text ">
              <Link to="/signup" className="white">
                Create New Account <i className="fas fa-chevron-right"></i>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
