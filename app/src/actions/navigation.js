import * as types from "../types/navigation";

export const changeNavigationWindow = (window) => ({
  type: types.CHANGE_PROFILE_NAVIGATION,
  payload: { window },
});

export const removeNavigation = () => ({
  type: types.REMOVE_PROFILE_NAVIGATION,
});
