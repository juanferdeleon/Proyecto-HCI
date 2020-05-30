import { combineReducers } from "redux";

import * as types from "../types/navigation";

const navigationWindow = (state = null, action) => {
  switch (action.type) {
    case types.CHANGE_PROFILE_NAVIGATION:
      return action.payload.window;
    case types.REMOVE_PROFILE_NAVIGATION:
      return null;
    default:
      return state;
  }
};

const navigation = combineReducers({
  navigationWindow,
});

export default navigation;

export const getNavigationWindow = (state) => state.navigationWindow;
