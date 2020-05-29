import * as types from "../types/lessons";

export const changeLesson = (lesson) => ({
  type: types.CHANGE_CURRENT_LESSON,
  payload: { lesson },
});
