import React from "react";

//import RegisterForm from "./RegisterForm/registerform";
import Logo from "../img/logo1.png";
import "./style.css";
import { Link } from "react-router-dom";
import QuizForm from "./QuizForm/quizform";

//import Parallax from "react-rellax";

const Quiz = () => {
  return (
    <div>
      <div className="quiz-title">
        <h1>Conoce que instrumento es para ti</h1>
      </div>
      <div className="quiz-main-container">
        <div className="quiz-img-container">
          <Link to="/">
            <img src={Logo} className="login-logo" alt="" />
          </Link>
        </div>
        <QuizForm />
      </div>
    </div>
  );
};

export default Quiz;
