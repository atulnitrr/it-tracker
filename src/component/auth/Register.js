import React, { Fragment, useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/autContext";

const Register = props => {
  const autContext = useContext(AuthContext);
  const {
    registerUser,
    clearRegister,
    testCall,
    isRegistered,
    error
  } = autContext;
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    if (error !== null) {
      console.log(error);
    } else if (isRegistered) {
      props.history.push("/");
      // clear the registration state after success
      clearRegister();
    }

    //eslint-disable-next-line
  }, [isRegistered, props.history, error]);

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    testCall();
    registerUser(user);
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
