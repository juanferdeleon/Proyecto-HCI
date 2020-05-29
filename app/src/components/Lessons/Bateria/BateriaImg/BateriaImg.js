import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles-imgb.css";
import * as selectors from "../../../../reducers";

const current_lesson =1 
const BateriaImg = ({current_lesson}) => {
    if (current_lesson=1) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonB1">
           </div>
        </div> 
      );
    }
    if(current_lesson=2) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonB2"></div>
        </div> 
      ); 
    }
    if(current_lesson=3) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonB3"></div>
        </div> 
      ); 
    }
    if(current_lesson=4) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonB4"></div>
        </div> 
      ); 
    }
  };
  
  export default BateriaImg;  
