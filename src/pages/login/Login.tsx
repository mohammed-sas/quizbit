import style from "./login.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { UserLogin } from "../model";
import { useAuth, useTheme } from "../../context";
const Login: React.FC = () => {
  const { theme } = useTheme();
  const { login } = useAuth();
  const location: any = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState<UserLogin>({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const guestHandler = () => {
    setUser({
      email: "test@test.com",
      password: "@123456_",
    });
  };
  const submitHandler = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      await login(user.email, user.password);
      navigate(location?.state?.from?.pathname || "/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className={style["login-container"]}>
      <div
        className={`${style["login-form-container"]} ${
          theme === "light" ? "box-shadow-light" : ""
        }`}
      >
        <h2 className="centered-text font-color">Login</h2>
        <form
          action="post"
          className={style["login-form"]}
          onSubmit={submitHandler}
        >
          <label htmlFor="email" className="font-color">
            <span className="font-color">Email address</span>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              autoFocus
              defaultValue={user.email}
              placeholder="abc@neog.com"
            />
          </label>

          <label htmlFor="password" className="text-font-color">
            <span className="font-color">Password</span>
            <input
              type="password"
              name="password"
              defaultValue={user.password}
              onChange={handleChange}
              placeholder="*******"
            />
          </label>
          <input type="submit" value="Login" className="btn btn-primary" />
          <input
            type="button"
            className="btn btn-secondary"
            value="Login as Guest"
            onClick={guestHandler}
          />

          <div>
            <p className="centered-text ">
              <Link to="/signup" className="font-color">
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
