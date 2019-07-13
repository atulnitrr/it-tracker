import React, { useReducer } from "react";
import AuthContext from "./autContext";
import autReducer from "./autReducer";
import {
  TEST_CALL,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  CLEAR_REGISTER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAR_ERROR,
  LOGOUT
} from "../types";
import axios from "axios";

const AuthState = props => {
  const initialState = {
    test: null,
    userId: localStorage.getItem("userId"),
    userName: localStorage.getItem("userName"),
    token: localStorage.getItem("token"),
    isAutenticated: localStorage.getItem("isAutenticated"),
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

  const clearError = () => {
    dispatch({ type: CLEAR_ERROR });
  };
  const login = async user => {
    try {
      const res = await axios.post("/users/login", user);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          userId: res.headers.userid,
          token: res.headers.authorization,
          userName: user.email.split("@")[0]
        }
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_FAILURE,
        payload:
          error.response.status === 403
            ? "Unauthorized user "
            : error.response.data.message
      });
    }
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <AuthContext.Provider
      value={{
        test: state.test,
        user: state.user,
        error: state.error,
        isAutenticated: state.isAutenticated,
        isRegistered: state.isRegistered,
        userId: state.userId,
        userName: state.userName,
        token: state.token,
        registerUser,
        clearRegister,
        login,
        logout,
        clearError,
        testCall
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
