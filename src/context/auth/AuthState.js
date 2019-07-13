import React, { useReducer } from "react";
import AuthContext from "./autContext";
import autReducer from "./autReducer";
import {
  TEST_CALL,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  CLEAR_REGISTER
} from "../types";
import axios from "axios";

const AuthState = props => {
  const initialState = {
    test: null,
    user: { userId: null, userName: null },
    isAutenticated: false,
    isRegistered: false,
    error: null
  };

  const [state, dispatch] = useReducer(autReducer, initialState);

  const testCall = async () => {
    try {
      const res = await axios.get("/test");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: TEST_CALL });
  };

  const registerUser = async user => {
    try {
      const res = await axios.post("/users", user);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: REGISTER_FAILED, payload: error.response.data.message });
    }
  };

  const clearRegister = () => {
    dispatch({ type: CLEAR_REGISTER });
  };

  return (
    <AuthContext.Provider
      value={{
        test: state.test,
        user: state.user,
        error: state.error,
        isAutenticated: state.isAutenticated,
        isRegistered: state.isRegistered,
        registerUser,
        clearRegister,
        testCall
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
