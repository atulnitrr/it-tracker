import {
  TEST_CALL,
  REGISTER_SUCCESS,
  CLEAR_REGISTER,
  REGISTER_FAILED,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
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
        user: {
          userId: action.payload.userId,
          userName: action.payload.userName
        }
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("userId", action.payload.userid);
      localStorage.setItem("token", action.payload.authorization);
      return {
        ...state,
        isAutenticated: true
      };
    case LOGIN_FAILURE:
    case REGISTER_FAILED:
      localStorage.setItem("userId", action.payload.userId);
      localStorage.setItem("userName", action.payload.userName);
      localStorage.setItem("token", action.payload.authorization);
      return {
        ...state,
        error: action.payload
      };
    case CLEAR_REGISTER:
      localStorage.removeItem("userId");
      localStorage.removeItem("userName");
      return {
        ...state,
        isRegistered: false,
        user: null
      };
    default:
      return state;
  }
};
