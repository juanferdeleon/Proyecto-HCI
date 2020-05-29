import * as types from "../types/lessons";
import { actionTypes } from "redux-form";
import { combineReducers } from "redux";

const currentLesson = (state = 0, action) => {
  switch (action.type) {
    case types.CHANGE_CURRENT_LESSON:
      console.log("LLEGA REDUCER", action.payload);
      return action.payload.lesson % 4;
    default:
      return state;
  }
};

const lesson = combineReducers({
  currentLesson,
});

export default lesson;

export const getCurrentLesson = (state) => state.currentLesson;
