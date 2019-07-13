import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./component/layout/NavBar";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Help from "./component/pages/Help";
import NotFound from "./component/pages/NotFound";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import AlertState from "./context/alert/AlertState";
import AuthState from "./context/auth/AuthState";
import Alert from "./component/layout/Alert";

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <div className="App">
            <NavBar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/help" component={Help} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </AuthState>
  );
};

export default App;
