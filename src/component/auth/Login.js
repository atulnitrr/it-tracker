import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/autContext";

const Login = props => {
  const autContext = useContext(AuthContext);
  const { login, error, isAutenticated } = autContext;
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    if (error) {
      console.log(error);
    } else if (isAutenticated) {
      props.history.push("/");
    }
  }, [isAutenticated, props.history]);

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log(user);
    login(user);
  };

  return (
    <div className="form-container">
      <h2>User login</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="email"
            placeholder="emal"
            value={user.email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="password"
            placeholder="password"
            value={user.password}
            onChange={onChange}
            required
          />
        </div>
        <input type="submit" name="Login" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Login;
