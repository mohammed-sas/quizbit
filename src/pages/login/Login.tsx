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
  const guestHandler = () => {
      setUser({
          email:"test@test.com",
          password:"@123456_"
      })
  };
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
              defaultValue={user.email}
              placeholder="abc@neog.com"
            />
          </label>

          <label htmlFor="password" className="text-white">
            <span className="white">Password</span>
            <input
              type="password"
              name="password"
              defaultValue={user.password}
              onChange={handleChange}
              placeholder="*******"
            />
          </label>
          <input type="submit" value="Login" className="btn btn-primary" />
          <input type="button" className="btn btn-secondary" value="Login as Guest" onClick={guestHandler}/>
           
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
