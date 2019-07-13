import {
  TEST_CALL,
  REGISTER_SUCCESS,
  CLEAR_REGISTER,
  REGISTER_FAILED
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
    case REGISTER_FAILED:
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
