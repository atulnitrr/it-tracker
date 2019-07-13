import React, { Fragment, useState, useContext } from "react";
import AuthContext from "../../context/auth/autContext";

const Register = () => {
  const autContext = useContext(AuthContext);
  const { testCall, addUser } = autContext;
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    testCall();
    addUser(user);
  };
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name.."
          value={user.name}
          onChange={onChange}
        />
        <input
          type="text"
          name="email"
          placeholder="email.."
          value={user.email}
          onChange={onChange}
        />
        <input
          type="text"
          name="password"
          placeholder="password.."
          value={user.password}
          onChange={onChange}
        />
        <input type="submit" name="Register" />
      </form>
    </Fragment>
  );
};

export default Register;
