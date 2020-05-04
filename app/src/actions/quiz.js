import * as types from "../types/quiz";

export const answer_question = (answer_value) => ({
  type: types.QUESTION_ANSWERED,
  payload: answer_value,
});

export const select_answer = (answer_id) => ({
  type: types.SELECTED_ANSWER,
  payload: answer_id,
});
