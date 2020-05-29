import React from "react";

import SideBar from "../../SideBar/sidebar";

//import "./styles.css";
import BateriaForm from './BateriaForm/BateriaForm'
import BateriaImg from  './BateriaImg/BateriaImg'
import { connect } from "react-redux";
import * as selectors from "../../../reducers";
import { Redirect, Link } from "react-router-dom";
import * as actions from "../../../actions/lessons";

let lesson = 0;

const BateriaLesson = ({ currentLesson, onSubmit }) => {
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
          <div className="next-button"  onClick={onSubmit}>
            <span>Siguiente</span></div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  undefined,
  (dispatch) => ({
    onSubmit() {
      lesson += 1;
      console.log(lesson);
      dispatch(actions.changeLesson(lesson));
    },
  })
)(BateriaLesson);
