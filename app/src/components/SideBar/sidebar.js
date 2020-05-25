import React from "react";
import ProfileLogo from "../img/avatar.svg";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGuitar,
  faDrum,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

const SideBar = ({}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-user-info">
        <center>
          <img className="profile-img" src={ProfileLogo} alt="" />
          <h4>User Name</h4>
        </center>
      </div>
      <div className="sidebar-options">
        <div className="sidebar-option">
          <FontAwesomeIcon icon={faGuitar} />
          <h5>Curso Guitarra</h5>
        </div>
        <div className="sidebar-option">
          <FontAwesomeIcon icon={faDrum} />
          <h5>Curso Bateria</h5>
        </div>
      </div>
      <div className="sidebar-user-options">
        <div className="sidebar-option logout">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <h5>Logout</h5>
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    // authUsername: selectors.getAuthUsername(state),
  }),
  (dispatch) => ({})
)(SideBar);
