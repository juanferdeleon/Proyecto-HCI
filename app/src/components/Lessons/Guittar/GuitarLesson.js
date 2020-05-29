import React from "react";

import SideBar from "../../SideBar/sidebar";

import "./styles.css";
import GuitarForm from './GuittarForm/guitarform'
import GuitarImg from  './GuittarImg/GuittarImg'
import { connect } from "react-redux";
import * as selectors from "../../../reducers";
import { Redirect, Link } from "react-router-dom";

const GuitarLesson = () => {
  let current_lensson = 1
  let lesson ={
    'lesson':current_lensson,
  }
  return (
    <div className="user-main-container">
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="lessons-container">
        <div className="cont-general">
        <div className="title">LECCIONES DE GUITARRA</div>
          <div className="lower-container">
          <div className="promo-lessons">
            <div className='lessons'>
              <div className="lesson-cont">
                    <GuitarForm lesson={lesson}/>
                      </div>
                      <div className="lesson-cont">
                    <GuitarImg lesson={lesson}/>
              </div>
            </div>
          </div>
          <div className="next-button" onClick={e=>{
            current_lensson +=1
            lesson['lesson']=current_lensson
            console.log(current_lensson, lesson)}}><span>Siguiente</span></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default GuitarLesson;
