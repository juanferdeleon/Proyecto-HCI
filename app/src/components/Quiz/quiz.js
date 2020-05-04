import React from "react";

//import RegisterForm from "./RegisterForm/registerform";
import "./style.css";
import QuizForm from "./QuizForm/quizform";

//import Parallax from "react-rellax";

const Quiz = () => {
  return (
    <div>
      <div className="quiz-title">
        <h1>Conoce que instrumento es para ti</h1>
      </div>
      <QuizForm />
    </div>
  );
};

export default Quiz;
