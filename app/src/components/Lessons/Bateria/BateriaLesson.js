import React from "react";

import SideBar from "../../SideBar/sidebar";
//import "./styles.css";
import BateriaForm from './BateriaForm/BateriaForm'
import BateriaImg from  './BateriaImg/BateriaImg'
import { connect } from "react-redux";
import * as selectors from "../../../reducers";
import { Redirect, Link } from "react-router-dom";

const BateriaLesson = () => {
  return (
    <div className="user-main-container">
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="lessons-container">
        <div className="title">LECCIONES DE BATERIA</div>
          <div className="lower-container">
          <div className="promo-lessons">
            <div className='lessons'>
              <div className="lesson-cont">
                 <BateriaForm/>
                      </div>
                      <div className="lesson-cont">
               <BateriaImg/>
              </div>
            </div>
          </div>
          <div className="next-button"><span>Siguiente</span></div>
        </div>
      </div>
    </div>
  );
};

export default BateriaLesson;