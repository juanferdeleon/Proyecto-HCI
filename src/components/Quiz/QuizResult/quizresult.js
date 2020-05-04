import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as selectors from "../../../reducers";
import Logo from "../../img/logo1.png";
import "./style.css";

const QuizResult = ({ quiz_result }) => {
  if (quiz_result < 5) {
    // Se le recomienda un Violin
    return (
      <div className="main-container">
        <div className="img-container">
          <img
            src="https://images.unsplash.com/photo-1492563817904-5f1dc687974f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="info-container">
          <div className="quiz-img-container">
            <Link to="/">
              <img src={Logo} className="login-logo" alt="" />
            </Link>
          </div>
          <div className="quiz-result-content">
            <h2>¡Al parecer el Violin esta hecho para ti!</h2>
            <p>
              Instrumentos de cuerda y arco: Requieren largos años de estudio,
              por lo que sólo se recomiendan para personas concienzudas y
              pacientes, con buen oído. Ser zurdo favorece su aprendizaje, ya
              que la mano que lo tiene más difícil es la izquierda. Con el
              violín se puede comenzar en edad preescolar: se necesita un cuerpo
              ágil y buen equilibrio (el instrumento se sostiene entre la
              barbilla y la clavícula). Es el instrumento que suelen preferir
              los hijos únicos y exige apoyo por parte de los padres. El
              violoncelo puede gustar más a un principiante, ya que la posición
              es más fácil y los tonos no suenan tan descorazonadores como en el
              caso del violín. Conviene que la estatura sea alta o media y los
              brazos, largos.
            </p>
            <Link to="/register">
              <button className="btn">Registrate</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  if (quiz_result >= 5 && quiz_result < 7) {
    return (
      <div className="main-container">
        <div className="quiz-result-img-container">
          <img
            src="https://wallpapertag.com/wallpaper/full/d/4/c/615185-5-string-bass-guitar-wallpaper-1080x1920-for-phone.jpg"
            alt=""
          />
        </div>
        <div className="info-container">
          <div className="quiz-img-container">
            <Link to="/">
              <img src={Logo} className="login-logo" alt="" />
            </Link>
          </div>
          <div className="quiz-result-content">
            <h2>¡Al parecer la guitarra esta hecha para ti!</h2>
            <p>
              Instrumentos de cuerda y arco: Requieren largos años de estudio,
              por lo que sólo se recomiendan para personas concienzudas y
              pacientes, con buen oído. Ser zurdo favorece su aprendizaje, ya
              que la mano que lo tiene más difícil es la izquierda. Con el
              violín se puede comenzar en edad preescolar: se necesita un cuerpo
              ágil y buen equilibrio (el instrumento se sostiene entre la
              barbilla y la clavícula). Es el instrumento que suelen preferir
              los hijos únicos y exige apoyo por parte de los padres. El
              violoncelo puede gustar más a un principiante, ya que la posición
              es más fácil y los tonos no suenan tan descorazonadores como en el
              caso del violín. Conviene que la estatura sea alta o media y los
              brazos, largos.
            </p>
            <Link to="/register">
              <button className="btn">Registrate</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  if (quiz_result >= 7) {
    return (
      <div className="main-container">
        <div className="quiz-result-img-container">
          <img
            src="https://i.pinimg.com/originals/54/a0/e6/54a0e65ca292315aaa381591529c63ad.jpg"
            alt=""
          />
        </div>
        <div className="info-container">
          <div className="quiz-img-container">
            <Link to="/">
              <img src={Logo} className="login-logo" alt="" />
            </Link>
          </div>
          <div className="quiz-result-content">
            <h2>¡Al parecer la bateria esta hecha para ti!</h2>
            <p>
              Para dedicarse a los instrumentos de percusión hace falta mucho
              sentido del rítmo. Los hay afinados como el xilófono o el timbal,
              y otros no afinados, como el tambor y la batería. Para tocarlos se
              necesitan reflejos, movimientos ágiles, una buena coordinación de
              las manos y capacidad de concentración. Un buen baterista es capaz
              de usar manos y pies a la vez y pasar con rapidez vertiginosa de
              un tambor o platillo a otro. Son instrumentos ideales para chicos
              hiperactivos, que necesitan liberar energía. Conviene empezar con
              el tambor y pasar luego a los otros.
            </p>
            <Link to="/register">
              <button className="btn">Registrate</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default connect(
  (state) => ({
    quiz_result: selectors.getQuizResult(state),
  }),
  undefined
)(QuizResult);
