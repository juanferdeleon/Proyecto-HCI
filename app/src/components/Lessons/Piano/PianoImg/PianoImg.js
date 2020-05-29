import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles-imgp.css";
import * as selectors from "../../../../reducers";

const PianoImg = ({currentLesson}) => {
    if (currentLesson === 0) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonP1">
           </div>
        </div> 
      );
    }
    if(currentLesson===1) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonP2"></div>
        </div> 
      ); 
    }
    if(currentLesson===2) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonP3"></div>
        </div> 
      ); 
    }
    if(currentLesson===3) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonP4"></div>
        </div> 
      ); 
    }
  };
  
  export default connect((state) => ({
    currentLesson: selectors.getCurrentLesson(state),
  }))(PianoImg); 
