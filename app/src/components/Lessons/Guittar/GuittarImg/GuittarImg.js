import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles-img.css";
import * as selectors from "../../../../reducers";

const GuittarImg = ({ currentLesson }) => {
  if (currentLesson === 0) {
    return (
      <div className="Contenedor">
        <div className="img-lesson1"></div>
      </div>
    );
  }
  if (currentLesson === 1) {
    return (
      <div className="Contenedor">
        <div className="img-lesson2"></div>
      </div>
    );
  }
  if (currentLesson === 2) {
    return (
      <div className="Contenedor">
        <div className="img-lesson3"></div>
      </div>
    );
  }
  if (currentLesson === 3) {
    return (
      <div className="Contenedor">
        <div className="img-lesson4"></div>
      </div>
    );
  }
};

export default connect((state) => ({
  currentLesson: selectors.getCurrentLesson(state),
}))(GuittarImg);
