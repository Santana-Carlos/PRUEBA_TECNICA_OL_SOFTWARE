import React from "react";
import LoginForm from "./LoginForm";
import "./Login.css";

const Login = () => {
  return (
    <div className="o-login-background">
      <div className="o-row" style={{ marginTop: "auto" }}>
        <div className="o-login-title">
          <h1 style={{ fontSize: "2.5em" }}> Aplicación OLSoftware </h1>
          <p style={{ fontSize: "1.5em" }}>Prueba práctica Front-end senior</p>
        </div>
        <LoginForm />
      </div>
      <p style={{ margin: "auto 0 1rem" }}>OLSoftware - 2018</p>
    </div>
  );
};

export default Login;
