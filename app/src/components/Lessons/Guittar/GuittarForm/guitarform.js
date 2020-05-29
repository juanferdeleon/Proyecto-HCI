import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import "./styles-form.css";
import * as selectors from "../../../../reducers";
// import * as actions from "../../../actions/quiz";
// import QuizResult from "../QuizResult/quizresult";
// import Logo from "../../img/logo1.png";

const GuittarForm = ({ currentLesson }) => {
  console.log("LLEGAAA", currentLesson);
  if (currentLesson === 0) {
    return (
      <div className="Contenedor">
        <div className="text-lesson">
          Antes de aprender a tocar la guitarra, debemos conocer nuestro
          instrumento pues así le podremos sacar un mejor provecho y vamos
          conociendo un poco más como está formada nuestra guitarra. Esto son
          los elementos principales de los cuales se conforma una guitarra,
          debemos tener en cuenta que cada uno de ellos es indispensable para
          que el instrumento pueda sonar de una mejor manera, ya que si le falta
          uno de ellos no se podrá utilizar nuestro instrumento y no le
          sacaremos el máximo provecho.
        </div>
      </div>
    );
  }
  if (currentLesson === 1) {
    return (
      <div className="Contenedor">
        <div className="text-lesson">
          Luego de que ya sabemos cuales son las partes de nuestro instrumento y
          aprendimos un poco mas sobre el, debemos de aprender cuales son las
          principales notas con su respectivo cifrado. Es muy importante
          aprendernos el cifrado, ya que cuando queramos buscar las notas de
          cualquier canción nos aparecerán con el cifrado y no con el nombre de
          la nota.
        </div>
      </div>
    );
  }
  if (currentLesson === 2) {
    return (
      <div className="Contenedor">
        <div className="text-lesson">
          Los Sostenidos y bemoles: Debemos tomar en cuenta que la nota tiene
          sostenidos los cuales están un semi-tono arriba de la nota y se
          denominan con un “#” y los bemoles están un semi-tono debajo de la
          nota y se denominan con '♭'. NOTA: LAS NOTAS “E” Y “B” NO TIENEN
          SOSTENIDOS.
        </div>
      </div>
    );
  }
  if (currentLesson === 3) {
    return (
      <div className="Contenedor">
        <div className="text-lesson">
          Acordes: Después de haber aprendido cuales son las notas sus
          sostenidos y bemoles, debemos proceder a ver como se crean las acordes
          en los trastes de la guitarra y para esto debemos saber que existen
          los acordes mayores y menores. Pero antes de ver los acordes, debemos
          tener en cuenta cuales son las notas que tiene las cuerdas por si
          solas, como se muestra en esa imagen y el conteo empieza de abajo
          hacia arriba.
        </div>
      </div>
    );
  }
};

export default connect((state) => ({
  currentLesson: selectors.getCurrentLesson(state),
}))(GuittarForm);
