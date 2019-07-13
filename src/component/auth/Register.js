import React, { useState, useContext, useEffect } from "react";
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
      props.history.push("/login");
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
    <div className="form-container">
      <h1>
        Account <span> Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          {/* <label htmlFor="name">Name </label> */}
          <input
            type="text"
            name="name"
            placeholder="name.."
            value={user.name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="email">Email </label> */}
          <input
            type="text"
            name="email"
            placeholder="email.."
            value={user.email}
            onChange={onChange}
            required
          />
        </div>

        <div className="from-group">
          {/* <label htmlFor="password">Password </label> */}
          <input
            type="text"
            name="password"
            placeholder="password.."
            value={user.password}
            onChange={onChange}
            required
          />
        </div>
        <input
          type="submit"
          name="Register"
          className="btn  btn-primary btn-larg"
          style={{ margin: "1rem 0 0 0" }}
        />
      </form>
    </div>
  );
};

export default Register;
