import React from "react";

import SideBar from "../../SideBar/sidebar";
//import "./styles.css";
import ViolinForm from './ViolinForm/ViolinForm'
import ViolinImg from  './ViolinImg/ViolinImg'
import { connect } from "react-redux";
import * as selectors from "../../../reducers";
import { Redirect, Link } from "react-router-dom";

const ViolinLesson = () => {
  return (
    <div className="user-main-container">
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="lessons-container">
        <div className="title">LECCIONES DE VIOLIN</div>
          <div className="lower-container">
          <div className="promo-lessons">
            <div className='lessons'>
              <div className="lesson-cont">
                 <ViolinForm/>
                      </div>
                      <div className="lesson-cont">
                  <ViolinImg />
              </div>
            </div>
          </div>
          <div className="next-button"><span>Siguiente</span></div>
        </div>
      </div>
    </div>
  );
};

export default ViolinLesson;