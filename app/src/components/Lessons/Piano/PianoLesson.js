import React from "react";

import SideBar from "../../SideBar/sidebar";

//import "./styles.css";
import PianoForm from './PianoForm/PianoForm';
import PianoImg from  './PianoImg/PianoImg'
import { connect } from "react-redux";
import * as selectors from "../../../reducers";
import { Redirect, Link } from "react-router-dom";
import * as actions from "../../../actions/lessons";


let lesson = 0;

const PianoLesson = ({ currentLesson, onSubmit }) => {
  return (
    <div className="user-main-container">
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="lessons-container">
        <div className="title">LECCIONES DE PIANO</div>
          <div className="lower-container">
          <div className="promo-lessons">
            <div className='lessons'>
              <div className="lesson-cont">
                 <PianoForm/>
                      </div>
                      <div className="lesson-cont">
                <PianoImg/>
              </div>
            </div>
          </div>
          <div className="next-button" onClick={onSubmit}
          ><span>Siguiente</span></div>
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
)(PianoLesson);
