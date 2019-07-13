import { TEST_CALL } from "../types";

export default (state, action) => {
  switch (action.type) {
    case TEST_CALL:
      return {
        ...state,
        test: action.payload
      };
    default:
      return state;
  }
};
