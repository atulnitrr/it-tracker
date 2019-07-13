import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/autContext";

const PrivateRoute = ({ component: Component, ...res }) => {
  const authContext = useContext(AuthContext);
  const { isAutenticated } = authContext;
  return (
    <Route
      {...res}
      render={props =>
        !isAutenticated ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
