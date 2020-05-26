import React from "react";

import SideBar from "../SideBar/sidebar";

import "./styles.css";
import { connect } from "react-redux";
import * as selectors from "../../reducers";
import { Redirect } from "react-router-dom";

const MainPage = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="user-main-container">
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="lessons-container">
        <h1>Holaaaa</h1>
      </div>
    </div>
  );
};

export default connect((state) => ({
  isAuthenticated: selectors.isAuthenticated(state),
}))(MainPage);
