import {
  TEST_CALL,
  REGISTER_SUCCESS,
  CLEAR_REGISTER,
  REGISTER_FAILED,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  CLEAR_ERROR,
  LOGOUT
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case TEST_CALL:
      return {
        ...state,
        test: action.payload
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("userId", action.payload.userId);
      localStorage.setItem("userName", action.payload.userName);
      return {
        ...state,
        isRegistered: true,
        userId: action.payload.userId,
        userName: action.payload.userName
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("userId", action.payload.userId);
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userName", action.payload.userName);
      localStorage.setItem("isAutenticated", true);
      return {
        ...state,
        isAutenticated: true
      };
    case LOGIN_FAILURE:
    case LOGOUT:
    case REGISTER_FAILED:
      localStorage.removeItem("userId");
      localStorage.removeItem("userName");
      localStorage.removeItem("token");
      localStorage.removeItem("isAutenticated");
      return {
        ...state,
        error: action.payload
      };
    case CLEAR_REGISTER:
      localStorage.removeItem("userId");
      localStorage.removeItem("userName");
      localStorage.removeItem("token");
      localStorage.removeItem("isAutenticated");
      return {
        ...state,
        isRegistered: false
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
