import React, { useState, useEffect } from "react";
import { Backdrop, IconButton } from "@material-ui/core";
import { ExitToApp as ExitIcon } from "@material-ui/icons";
import UserImg from "../../Assets/user.png";
import data from "../../Assets/data.json";
import "./Dashboard.css";
import "../../Styles/LoadingDotPulse.css";

const AppBar = (props) => {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);

  const LogOut = () => {
    console.log("Click!");
    setLoading(true);

    //simulacion del tiempo de respuesta del API
    setTimeout(() => {
      window.location.assign("/");
    }, 1000);
  };

  useEffect(() => {
    setUserName(
      data.users_data[0].nombres + " " + data.users_data[0].apellidos
    );
  }, []);

  return (
    <div className="o-appbar-container">
      <h2 style={{ marginLeft: "2rem" }}> Prueba Front-end </h2>
      <div className="o-appbar-useroptions">
        <div className="o-appbar-useroptions">
          <img
            className="o-appbar-userimg"
            src={UserImg}
            alt="foto del usuario"
          />
          {userName}
        </div>
        <IconButton style={{ marginLeft: "1rem" }} onClick={LogOut}>
          <ExitIcon style={{ color: "#1D43AD" }} />
        </IconButton>
      </div>

      <Backdrop open={loading} className="o-loading" style={{ zIndex: 1250 }}>
        <h1>Cerrando sesión</h1>
        <div className="stage">
          <div className="dot-pulse" />
        </div>
      </Backdrop>
    </div>
  );
};

export default AppBar;
