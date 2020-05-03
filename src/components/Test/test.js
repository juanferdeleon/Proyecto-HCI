import React from "react";

//import RegisterForm from "./RegisterForm/registerform";
//import Logo from "../img/logo1.png";
import "./style.css";
import { Link } from "react-router-dom";

//import Parallax from "react-rellax";

const Test = () => {
  return (
    <section>
  <div className='quiz-container'>
        <div className='question-number'>
          <div>Pregunta <span className='question-num-value'>1</span> de 7</div>
        </div>
        <div className='question'>
          hola como estas?
        </div>
        <div className='options'>
          <div id='0' className='option1'>mal</div>
          <div id='1' className='option2'>bien</div>
          <div id='2' className='option3'>pos alv</div>
        </div>
        <button className='button'>
          <Link to='/register' className='btn'>Siguiente</Link>
        </button>    
        <div className='answer-tracker'>
          <div className=''></div>
          <div className=''></div>
          <div className=''></div>
          <div className=''></div>
          <div className=''></div>
          <div className=''></div>

        </div>
      </div>
      </section>
  );
};

export default Test