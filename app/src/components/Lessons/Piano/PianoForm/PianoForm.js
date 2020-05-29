import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles-formp.css";
import * as selectors from "../../../../reducers";


const PianoForm = ({currentLesson}) => {
    if (currentLesson === 0) {
      return (
        <div className='Contenedor'>
           <div className="text-lesson">
           <br></br>
            Lección No.1
            <br></br>
            <br></br> 
            Conociendo el instrumento y sus notas.
            Debemos tener claro que en el piano existen varias secciones en donde se vuelven a 
            repetir las notas, esto lo entenderemos mejor en la siguiente imagen.
            <br></br>
            Como se puede observar siempre se inicia con un Do y termina con un SI y se vuelve a repetir. 
            <br></br>
           </div>
        </div> 
      );
    }
    if (currentLesson === 1) {
      return (
        <div className='Contenedor'>
           <div className="text-lesson">
           <br></br>
           Sostenidos y bemoles
            <br></br>
            Estos se encuentran en las teclas negras de piano.
            Debemos tomar en cuenta que la nota tiene sostenidos los cuales están un semi-tono 
            arriba de la nota y se denominan con un “#”.<br></br>
            Los bemoles están un semi-tono debajo de la nota y se denominan con” ♭”.
            <br></br>
            <br></br>
            NOTA: LAS NOTAS “E” Y “B” NO TIENEN SOSTENIDOS.
           </div>
        </div> 
      );
    }
    if (currentLesson === 2) {
      return (
        <div className='Contenedor'>
           <div className="text-lesson">
           <br></br>
           Lección No.2 Acordes 
           <br></br>
            Después de haber aprendido cuales son las notas sus sostenidos y bemoles,
            debemos proceder a ver como se crean las acordes en las teclas del piano y para esto
            debemos saber que existen los acordes mayores y menores  (imagen en la siguiente leccion).
            <br></br>
            <br></br>
            Es muy importante aprendernos el cifrado, ya que cuando queramos buscar las notas de 
            cualquier canción nos aparecerán con el cifrado y no con el nombre de la nota.
           </div>
        </div> 
      );
    }
    if (currentLesson===3) {
      return (
        <div className='Contenedor'>
           <div className="mayores">
           </div>
        </div> 
      );
    }
  };
  
  export default connect((state) => ({
    currentLesson: selectors.getCurrentLesson(state),
  }))(PianoForm);  
