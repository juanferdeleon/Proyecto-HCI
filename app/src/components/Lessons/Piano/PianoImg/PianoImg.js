import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles-imgp.css";
import * as selectors from "../../../../reducers";

const current_lesson =1 
const PianoImg = ({current_lesson}) => {
    if (current_lesson=1) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonP1">
           </div>
        </div> 
      );
    }
    if(current_lesson=2) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonP2"></div>
        </div> 
      ); 
    }
    if(current_lesson=3) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonP3"></div>
        </div> 
      ); 
    }
    if(current_lesson=4) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonP4"></div>
        </div> 
      ); 
    }
  };
  
  export default PianoImg;  
