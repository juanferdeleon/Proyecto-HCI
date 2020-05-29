import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles-imgv.css";
import * as selectors from "../../../../reducers";

const ViolinImg = ({currentLesson }) => {
    if (currentLesson ===0) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonV1">
           </div>
        </div> 
      );
    }
    if(currentLesson ===1) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonV2"></div>
        </div> 
      ); 
    }
    if(currentLesson ===2) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonV3"></div>
        </div> 
      ); 
    }
    if(currentLesson ===3) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonV4"></div>
        </div> 
      ); 
    }
  };
  export default connect((state) => ({
    currentLesson: selectors.getCurrentLesson(state),
  }))(ViolinImg);
    
