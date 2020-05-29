import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles-formb.css";
import * as selectors from "../../../../reducers";


const BateriaForm = ({currentLesson } ) => {
    if (currentLesson === 0) {
      return (
        <div className='Contenedor'>
           <div className="text-lesson">
           Lección No.1 Partes de una batería
           <br></br>
           <br></br>

          Antes de aprender a tocar la bateria, debemos conocer nuestro instrumento pues así 
          le podremos sacar un mejor provecho y vamos conociendo un poco más como está formada nuestra bateria.
          Esto son los elementos principales de los cuales se conforma una batería, debemos tener en cuenta que
          cada uno de ellos es indispensable para que el instrumento pueda sonar de una mejor manera, ya que si
          le falta uno de ellos no se podrá utilizar nuestro instrumento y no le sacaremos el máximo provecho.


           </div>
        </div> 
      );
    }
    if (currentLesson === 1) {
      return (
        <div className='Contenedor'>
           <div className="text-lesson">
           Lección No.2 Técnica de manos 
           <br></br>
          Existen diferentes tipos de técnicas para las manos, como son:
          <br></br>
          •	Tecnica de la muñeca. <br></br>
          •	Control de dedos.<br></br>
          •	Movimiento del brazo.<br></br>
          •	Tecnica de moller.<br></br>
          <br></br>
          Sujetar la Baqueta
          <br></br>
          Las yemas de los dedos pulgar e índice tienen que estar colocados aproximadamente a 12 
          centímetros de la base de la baqueta, sujeta con la palma el centro hasta la base con la mano cerrada.
          <br></br>
           </div>
        </div> 
      );
    }
    if (currentLesson === 2) {
      return (
        <div className='Contenedor'>
           <div className="text-lesson">
          Tus brazos 
          <br></br>
          Los brazos van en una posición ni muy abierta ni muy cerrada, simulando un triángulo equilátero desde la 
          punta de los codos hasta el centro de la tarola, cuidando que el Angulo que se forma del torso del cuerpo 
          al brazo sea igual a 45 grados con las palmas de las manos viendo hacia abajo.
          <br></br>
          <br></br>
          Golpeteo
           <br></br>
           Es variable dependiendo de la dinámica del volumen con la que se esté tocando. 
           Lo más recomendable para empezar a baquetear es haciéndolo con un Angulo de 70  90 
           grados aproximadamente.
           <br></br>
           </div>
        </div> 
      );
    }
    if (currentLesson === 3) {
      return (
        <div className='Contenedor'>
            <div className="text-lesson">
           Técnica de bombo 
           <br></br>
          Un punto importante para desarrollar una adecuada técnica de bombo es el del banco o silla,
           la altura del banco varía dependiendo la estatura. Lo que se debe buscar en una postura es no 
          perder el Angulo de 90 grados que existe entre la rodilla, pierna, pie y torso tal como se muestra
          a continuación.
          <br></br>
          La otra forma es tocado solo con la punta sin dejar caer el talón, la postura del cuerpo debe de ser recta
           aplicando mas fuerza en el abdomen, justamente si estas tocando doble bombo o doble pedal. Esta técnica es
            aplicable cuando la dinámica del volumen es de Mezzo forte o fortissimo. 
           </div>
        </div> 
      );
    }
  };
  
  export default connect((state) => ({
    currentLesson: selectors.getCurrentLesson(state),
  }))(BateriaForm);  
