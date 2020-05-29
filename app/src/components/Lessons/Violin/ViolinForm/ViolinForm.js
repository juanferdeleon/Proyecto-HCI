import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles-formv.css";
import * as selectors from "../../../../reducers";

const current_lesson =1
const ViolinForm = ({current_lesson}) => {
    if (current_lesson=1) {
      return (
        <div className='Contenedor'>
           <div className="text-lesson">
            Lección No.1 Conociendo el instrumento y sus notas.
            Debemos tener claro que en el piano existen varias secciones en donde se vuelven a 
            repetir las notas, esto lo entenderemos mejor en la siguiente imagen.
            Como se puede observar siempre se inicia con un Do y termina con un SI y se vuelve a repetir.

           </div>
        </div> 
      );
    }
    if (current_lesson=2) {
      return (
        <div className='Contenedor'>
           <div className="text-lesson">
            Es muy importante aprendernos el cifrado, ya que cuando queramos buscar las notas de 
            cualquier canción nos aparecerán con el cifrado y no con el nombre de la nota.
            Sostenidos y bemoles (estos se encuentran en las teclas negras de piano)
            Debemos tomar en cuenta que la nota tiene sostenidos los cuales están un semi-tono 
            arriba de la nota y se denominan con un “#” y los bemoles están un semi-tono debajo de la nota y se denominan con” ♭”.
            NOTA: LAS NOTAS “E” Y “B” NO TIENEN SOSTENIDOS.
           </div>
        </div> 
      );
    }
    if (current_lesson=3) {
      return (
        <div className='Contenedor'>
           <div className="text-lesson">
           Lección No.2 Acordes 
            Después de haber aprendido cuales son las notas sus sostenidos y bemoles,
             debemos proceder a ver como se crean las acordes en las teclas del piano y para esto
             debemos saber que existen los acordes mayores y menores.
           </div>
        </div> 
      );
    }
    if (current_lesson=4) {
      return (
        <div className='Contenedor'>
           <div className="mayores">
           </div>
        </div> 
      );
    }
  };
  
  export default ViolinForm;  
