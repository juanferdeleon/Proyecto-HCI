import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles-img.css";
import * as selectors from "../../../../reducers";
 
const GuittarImg = ({lesson}) => {
    if (lesson.lesson===1) {
      return (
        <div className='Contenedor'>
           <div className="img-lesson1">
           </div>
        </div> 
      );
    }
    if(lesson===2) {
      return (
        <div className='Contenedor'>
           <div className="img-lesson2"></div>
        </div> 
      ); 
    }
    if(lesson===3) {
      return (
        <div className='Contenedor'>
           <div className="img-lesson3"></div>
        </div> 
      ); 
    }
    if(lesson===4) {
      return (
        <div className='Contenedor'>
           <div className="img-lesson4"></div>
        </div> 
      ); 
    }
  };
  
  export default GuittarImg;  
