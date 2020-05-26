import * as types from "../types/createuser";

export const createUser = (email, password) => ({
  type: types.CREATE_USER_STARTED,
  payload: { email, password },
});

export const completeCreateUser = () => ({
  type: types.CREATE_USER_COMPLETED,
});

export const failCreateUser = (error) => ({
  type: types.CREATE_USER_FAILED,
  payload: { error },
});
