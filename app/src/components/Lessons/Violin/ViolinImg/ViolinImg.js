import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles-imgv.css";
import * as selectors from "../../../../reducers";

const current_lesson =1 
const ViolinImg = ({current_lesson}) => {
    if (current_lesson=1) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonV1">
           </div>
        </div> 
      );
    }
    if(current_lesson=2) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonV2"></div>
        </div> 
      ); 
    }
    if(current_lesson=3) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonV3"></div>
        </div> 
      ); 
    }
    if(current_lesson=4) {
      return (
        <div className='Contenedor'>
           <div className="img-lessonV4"></div>
        </div> 
      ); 
    }
  };
  
  export default ViolinImg;  
