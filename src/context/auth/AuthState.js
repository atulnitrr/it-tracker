import React, { useReducer } from "react";
import AuthContext from "./autContext";
import autReducer from "./autReducer";
import { TEST_CALL } from "../types";
import axios from "axios";

const AuthState = props => {
  const initialState = {
    test: null,
    user: null,
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

  const addUser = async user => {
    try {
      const res = await axios.post("/users", user);
      console.log(res);
    } catch (error) {}
  };
  return (
    <AuthContext.Provider
      value={{
        test: state.test,
        user: state.user,
        error: state.error,
        addUser,
        testCall
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
