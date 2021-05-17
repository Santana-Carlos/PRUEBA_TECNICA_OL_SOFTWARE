import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/">
        <Redirect exact to="/login" />
      </Route>
    </Switch>
  );
};

export default App;
