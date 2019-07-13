import React, { useState } from "react";
import { userInfo } from "os";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
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
