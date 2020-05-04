import * as types from "../types/quiz";
import { combineReducers } from "redux";

const question = (state = 7, action) => {
  switch (action.type) {
    case types.QUESTION_ANSWERED:
      let q = state;
      q += 1;
      return q;
    default:
      return state;
  }
};

const result = (state = 5, action) => {
  switch (action.type) {
    case types.QUESTION_ANSWERED:
      let r = state;
      r += action.payload;
      return r;
    default:
      return state;
  }
};

const selectedanswer = (state = null, action) => {
  switch (action.type) {
    case types.SELECTED_ANSWER:
      return action.payload;
    case types.QUESTION_ANSWERED:
      return null;
    default:
      return state;
  }
};

const quiz = combineReducers({
  question,
  result,
  selectedanswer,
});

export default quiz;

export const getCurrentQuestion = (state) => state.question;
export const getSelectedAnswer = (state) => state.selectedanswer;
export const getQuizResult = (state) => state.result;
