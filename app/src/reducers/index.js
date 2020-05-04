import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import quiz, * as quizSelectors from "./quiz";

const reducer = combineReducers({
  quiz,
  form: formReducer,
});

export default reducer;

export const getCurrentQuestion = (state) =>
  quizSelectors.getCurrentQuestion(state.quiz);
export const getSelectedAnswer = (state) =>
  quizSelectors.getSelectedAnswer(state.quiz);
export const getQuizResult = (state) => quizSelectors.getQuizResult(state.quiz);
