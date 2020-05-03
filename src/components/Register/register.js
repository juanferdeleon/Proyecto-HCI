import React from "react";

import RegisterForm from "./RegisterForm/registerform";
import Logo from "../img/logo1.png";
import "./style.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="main-container">
      <div className="img-container">
        <img
          className="register-img"
          src="https://img.wallpaper.sc/iphonex/images/1125x2436/iphonex-1125x2436-wallpaper_02026.jpg"
          alt=""
        />
      </div>
      <div className="register-container">
        <Link to="/">
          <img src={Logo} className="register-logo" alt="" />
        </Link>
        <h2>Crea Tu Cuenta</h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
