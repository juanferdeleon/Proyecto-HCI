// import jwtDecode from "jwt-decode";
import { combineReducers } from "redux";

import * as types from "../types/auth";

const prueba = (state = null, action) => {
  switch (action.type) {
    case types.PRUEBA:
      return { ...action.payload };
  }

  return state;
};

export default prueba;
