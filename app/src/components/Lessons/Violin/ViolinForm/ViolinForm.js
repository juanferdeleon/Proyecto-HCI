import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles-formv.css";
import * as selectors from "../../../../reducers";


const ViolinForm = ({currentLesson })  => {
    if (currentLesson === 0) {
      return (
        <div className='Contenedor'>
           <div className="text-lesson">
            Lección No.1 Conociendo el instrumento y sus notas.
            <br></br>
            <br></br>
            Debemos saber que el violin es uno de los instrumentos mas fragiles y costosos,
            esto se debe a su comlejo proceso de fabricacion y los materiales utilizados.
            En la figura se pueden observar las partes del violin y del arco.
            <br></br>
            <br></br>
            Las principales son el alma, diapason, barbada, puente, cuerdas y clavijas, 
            esto se debe a que seran los componentes mas mecionados dentro del proceso inicial de aprendizaje
           </div>
        </div> 
      );
    }
    if (currentLesson === 1) {
      return (
        <div className='Contenedor'>
           <div className="text-lesson">
           Lección No.1 Conociendo el instrumento y sus notas.
            <br></br>
            Debemos saber que el violin tiene 4 cuerdas, estas de izquierda a derecha son:<br></br>
            Sol<br></br>
             Re<br></br>
             La<br></br>
             Mi<br></br>
            <br></br>
            Para poder tocar este instrumento se utilizan todos los dedos a excepcion del pulgar,
            ya que este funcionara como soporte del diapason al momento de tenerlo en posicion.
   
           </div>
        </div> 
      );
    }
    if (currentLesson === 2) {
      return (
        <div className='Contenedor'>
           <div className="text-lesson">
           Lección No.2 La postura 
           <br></br>
            <br></br>
            La espalda debe estar recta y relajada <br></br>
            El violin se sujeta entre la clavicula y la barbilla, nunca con el hombro,
            de esta manera se evita tension.<br></br>
            El brazo izquierdo debe estar en un angulo recto con el cuerpo y el hombro relajado<br></br>
            El codo izquierdo se mantiene siempre aljeado del cuerpo, sin apollarlo en la cadera<br></br>
            La almohadilla tiene como funcion mantener el cuello elevado, el cuello no debe estar
            tenso ni forzado.
           </div>
        </div> 
      );
    }
    if (currentLesson === 3) {
      return (
        <div className='Contenedor'>
           <div className="text-lesson">
           Movimiento del arco
           <br></br>
           <br></br>
           La manera correcta de agarrar el arco es unicamente con 4 dedos, sosteniendolo suave pero 
           firmemente por el entorchado, sin empuñar, unicamente con las llemas. 
           <br></br>
           <br></br>
            Existen distintas tecnicas de movimiento del arco. La fundamental se llama Detache,
            esta estudiaremos. Es el movimiento básico en el cuál cada nota se toca en un golpe de 
            arco, empleándose una fracción del arco (mitad, tercio, cuarto…).
           </div>
        </div> 
      );
    }
  };
  
  export default connect((state) => ({
    currentLesson: selectors.getCurrentLesson(state),
  }))(ViolinForm);  
