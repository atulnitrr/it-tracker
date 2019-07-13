import { SET_ALERT, CLEAR_ALERT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        alert: action.payload
      };
    case CLEAR_ALERT:
      return {
        alert: null
      };
    default:
      return { ...state };
  }
};
