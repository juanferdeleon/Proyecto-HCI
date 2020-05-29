import React from "react";

import SideBar from "../../SideBar/sidebar";
//import "./styles.css";
import ViolinForm from './ViolinForm/ViolinForm'
import ViolinImg from  './ViolinImg/ViolinImg'
import { connect } from "react-redux";
import * as actions from "../../../actions/lessons";
import * as selectors from "../../../reducers";
import { Redirect, Link } from "react-router-dom";

let lesson = 0;

const ViolinLesson = ({ currentLesson, onSubmit }) => {
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
          <div className="next-button" onClick={onSubmit}>
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
)(ViolinLesson);
