import React from "react";
import ProfileLogo from "../img/avatar.svg";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGuitar,
  faDrum,
  faSignOutAlt,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import * as actions from "../../actions/auth";
import * as navigationActions from "../../actions/navigation";
import * as selectors from "../../reducers";
import "./styles.css";
import { Redirect, Link } from "react-router-dom";
import Logo from "../img/logo1.png";

const SideBar = ({
  authUsername,
  onLogout,
  isAuth,
  navigation,
  onClick,
  removeNavigation,
}) => {
  console.log("Navigation", navigation);
  if (!isAuth) {
    return <Redirect to="/" />;
  }
  return (
    <div className="sidebar">
      <Link to="/main-page">
        <div className="logo-container" onClick={() => removeNavigation()}>
          <img src={Logo} className="login-logo" alt="" />
        </div>
      </Link>
      <div className="sidebar-options">
        <Link to="/GuitarLesson">
          <div
            className={
              navigation === "Guitar"
                ? "sidebar-option selected"
                : "sidebar-option"
            }
            onClick={() => onClick("Guitar")}
          >
            <FontAwesomeIcon icon={faChevronRight} />
            <h5>Curso Guitarra</h5>
          </div>
        </Link>
        <Link to="/PianoLesson">
          <div
            className={
              navigation === "Piano"
                ? "sidebar-option selected"
                : "sidebar-option"
            }
            onClick={() => onClick("Piano")}
          >
            <FontAwesomeIcon icon={faChevronRight} />
            <h5>Curso Piano</h5>
          </div>
        </Link>
        <Link to="/ViolinLesson">
          <div
            className={
              navigation === "Violin"
                ? "sidebar-option selected"
                : "sidebar-option"
            }
            onClick={() => onClick("Violin")}
          >
            <FontAwesomeIcon icon={faChevronRight} />
            <h5>Curso Violin</h5>
          </div>
        </Link>
        <Link to="/BateriaLesson">
          <div
            className={
              navigation === "Drums"
                ? "sidebar-option selected"
                : "sidebar-option"
            }
            onClick={() => onClick("Drums")}
          >
            <FontAwesomeIcon icon={faChevronRight} />
            <h5>Curso Bateria</h5>
          </div>
        </Link>
      </div>
      <div className="sidebar-user-options">
        <div className="sidebar-user-info">
          <div>
            <img className="profile-img" src={ProfileLogo} alt="" />
          </div>
          <div className="user-info">
            <h4>Usuario</h4>
            <p>{authUsername}</p>
          </div>
        </div>
        <div className="sidebar-option logout" onClick={onLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <h5>Logout</h5>
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    authUsername: selectors.getAuthUsername(state),
    isAuth: selectors.isAuthenticated(state),
    navigation: selectors.getNavigationWindow(state),
  }),
  (dispatch) => ({
    onLogout() {
      dispatch(actions.logout());
      dispatch(navigationActions.removeNavigation());
    },
    onClick(navigation) {
      dispatch(navigationActions.changeNavigationWindow(navigation));
    },
    removeNavigation() {
      dispatch(navigationActions.removeNavigation());
    },
  })
)(SideBar);
