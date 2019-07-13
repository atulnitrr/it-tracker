import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/autContext";

const NavBar = () => {
  const authContext = useContext(AuthContext);
  const { logout, userName, isAutenticated, clearError } = authContext;

  const onLogout = () => {
    logout();
    clearError();
  };

  const guestLink = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>

      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  const authLink = (
    <Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/help">Help</Link>
      </li>
      <span style={{ color: "yellow" }}>Hello {userName}</span>
      <li />
      <li>
        <a href="#!" onClick={onLogout}>
          Logout
        </a>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <ul>{isAutenticated ? authLink : guestLink}</ul>
    </div>
  );
};

export default NavBar;
