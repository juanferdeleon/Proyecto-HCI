import React from "react";

import SideBar from "../../SideBar/sidebar";

import "./styles.css";
import GuitarForm from "./GuittarForm/guitarform";
import GuitarImg from "./GuittarImg/GuittarImg";
import { connect } from "react-redux";
import * as selectors from "../../../reducers";
import { Redirect, Link } from "react-router-dom";
import * as actions from "../../../actions/lessons";

let lesson = 1;

const GuitarLesson = ({ currentLesson, onSubmit }) => {
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
              <div className="lessons">
                <div className="lesson-cont">
                  <GuitarForm />
                </div>
                <div className="lesson-cont">
                  <GuitarImg />
                </div>
              </div>
            </div>
            <div className="next-button" onClick={onSubmit}>
              <span>Siguiente</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    currentLesson: selectors.getCurrentLesson(state),
  }),
  (dispatch) => ({
    onSubmit() {
      lesson += 1;
      console.log(lesson);
      dispatch(actions.changeLesson(lesson));
    },
  })
)(GuitarLesson);
