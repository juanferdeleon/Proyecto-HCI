import React from "react";

import LoginForm from "./LoginForm/loginform";
import Logo from "../img/logo1.png";
import "./style.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="main-container">
      <div className="img-container">
        <img
          className="login-img"
          src="https://wallpaperaccess.com/full/891144.jpg"
          alt=""
        />
      </div>
      <div className="login-container">
        <Link to="/test">
          <img src={Logo} className="login-logo" alt="" />
        </Link>
        <h2>Inicia Sesión</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
