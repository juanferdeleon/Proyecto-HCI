import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles-imgb.css";
import * as selectors from "../../../../reducers";

const BateriaImg = ({currentLesson } ) => {
    if (currentLesson === 0) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonB1">
           </div>
        </div> 
      );
    }
    if(currentLesson === 1) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonB2"></div>
        </div> 
      ); 
    }
    if(currentLesson === 2) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonB3"></div>
        </div> 
      ); 
    }
    if(currentLesson === 3) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonB4"></div>
        </div> 
      ); 
    }
  };
  
  export default connect((state) => ({
    currentLesson: selectors.getCurrentLesson(state),
  }))(BateriaImg); 
