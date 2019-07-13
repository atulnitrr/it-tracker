import React, { useReducer } from "react";
import UserContext from "./userContext";
import userReducer from "./userReducer";
import axios from "axios";

import {} from "../types";
import { async } from "q";

const UserState = props => {
  const initialState = {
    allUsers: []
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const getAllUsers = async () => {
    try {
      const res = await axios.get("/users");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        allUsers: state.allUsers,
        getAllUsers
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
