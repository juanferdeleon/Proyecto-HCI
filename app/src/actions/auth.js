import * as types from "../types/auth";

export const startLogin = (username, password) => ({
  type: types.PRUEBA,
  payload: { username, password },
});
