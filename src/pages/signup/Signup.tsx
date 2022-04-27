import style from "../login/login.module.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {UserSignup} from '../model';
import { useAuth } from "../../context";


const Signup: React.FC = () => {
    const {signup} = useAuth();
    const navigate=useNavigate();
    const [passMatch, setPassMatch] = useState<boolean>(true);
  const [user, setUser] = useState<UserSignup>({
      email:"",
      password:"",
      confirmPassword:"",
      firstName:"",
      lastName:"",
  });
  const [showpass, setShowpass] = useState<boolean>(false);
  const [showConfirmpass, setShowConfirmpass] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const submitHandler =async (e:React.FormEvent) => {
      try{
        e.preventDefault();
        if (user.password !== user.confirmPassword) {
          setPassMatch(false);
          return;
        }
        await signup(user.email,user.password);
        navigate("/");
      }catch(error){
          console.log(error);
      }
  };
  return (
    <main className={style["login-container"]}>
      <div className={style["login-form-container"]}>
        <h2 className="centered-text white">Signup</h2>
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
          <label className="white" htmlFor="firstName">
            <span>First Name</span>
            <input
              name="firstName"
              required
              onChange={handleChange}
              type="text"
              placeholder="First Name"
            />
          </label>
          <label className="white" htmlFor="lastName">
            <span>Last Name</span>
            <input
              name="lastName"
              required
              onChange={handleChange}
              type="text"
              placeholder="Last Name"
            />
          </label>
          <label className="white" htmlFor="password">
            <span>Password</span>
            <div className={style["password"]}>
              <input
                name="password"
                type={showpass ? "text" : "password"}
                required
                onChange={handleChange}
              />
              <i
                onClick={() => setShowpass(!showpass)}
                className={"fas " + (showpass ? "fa-eye" : "fa-eye-slash")}
              ></i>
            </div>
          </label>
          <label className="white" htmlFor="confirmPassword">
            <span>Confirm Password</span>
            <div className={style["password"]}>
              <input
                name="confirmPassword"
                type={showConfirmpass ? "text" : "password"}
                required
                onChange={handleChange}
              />
              <i
                onClick={() => setShowConfirmpass(!showConfirmpass)}
                className={
                  "fas " + (showConfirmpass ? "fa-eye" : "fa-eye-slash")
                }
              ></i>
            </div>
          </label>
          {passMatch ? null : (
            <span className="white">Passwords Not Matching</span>
          )}
          <input type="submit" value="Signup" className="btn btn-primary" />
          <div>
            <p className="centered-text ">
              <Link to="/login" className="white">
                Already have an Account <i className="fas fa-chevron-right"></i>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;
