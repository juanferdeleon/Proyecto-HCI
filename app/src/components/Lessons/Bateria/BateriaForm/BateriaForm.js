import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles-formb.css";
import * as selectors from "../../../../reducers";

const current_lesson =1
const BateriaForm = ({current_lesson}) => {
    if (current_lesson=1) {
      return (
        <div className='Contenedor'>
           <div className="text-lesson">
            LKSAJNAKSDJN

           </div>
        </div> 
      );
    }
    if (current_lesson=2) {
      return (
        <div className='Contenedor'>
           <div className="text-lesson">
            Es m
           </div>
        </div> 
      );
    }
    if (current_lesson=3) {
      return (
        <div className='Contenedor'>
           <div className="text-lesson">
           Lec.
           </div>
        </div> 
      );
    }
    if (current_lesson=4) {
      return (
        <div className='Contenedor'>
            <div className="text-lesson">
           Lec.
           </div>
        </div> 
      );
    }
  };
  
  export default BateriaForm;  
