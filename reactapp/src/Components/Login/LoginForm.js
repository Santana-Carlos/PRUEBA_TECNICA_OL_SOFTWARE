import React, { useState } from "react";
import {
  Backdrop,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import {
  PersonOutline as IconUser,
  LockOutlined as IconPass,
} from "@material-ui/icons";
import { BlueButton, GreenButton } from "../StyledComponents";
import { useHandleChange } from "../../Hooks/HandleChange";
import data from "../../Assets/data.json";
import "./Login.css";
import "../../Styles/LoadingDotPulse.css";

const LoginForm = () => {
  const user = useHandleChange("");
  const pass = useHandleChange("");
  const [loading, setLoading] = useState(false);
  const [diag, setDiag] = useState(false);

  const logIn = () => {
    const auth = data.users_data;
    console.log(auth);
    const check = auth.some(
      (x) => x.id === user.value && x.pass === pass.value
    );

    if (check) {
      setLoading(true);

      //simulacion del tiempo de respuesta del API
      setTimeout(() => {
        window.location.assign("/dashboard");
      }, 1500);
    } else setDiag(true);
  };

  return (
    <div className="o-login-container">
      <h1> Inicio de sesión </h1>
      <div style={{ margin: "3rem 0" }}>
        <div className="o-form-log o-form-log-user">
          <input placeholder="Usuario" className="o-input-log" {...user} />
          <IconUser className="o-fullcenter" />
        </div>
        <div className="o-form-log">
          <input
            type="password"
            placeholder="Contraseña"
            className="o-input-log"
            {...pass}
          />
          <IconPass className="o-fullcenter" />
        </div>
      </div>
      <div className="o-button-log">
        <BlueButton type="submit" onClick={logIn}>
          Iniciar sesión
        </BlueButton>
      </div>

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={diag}
        PaperProps={{ style: { borderRadius: "30px" } }}
      >
        <DialogTitle style={{ textAlign: "center", paddingBottom: "2rem" }}>
          Credenciales inválidas
        </DialogTitle>
        <DialogContent
          style={{
            textAlign: "center",
            padding: "0 2rem",
            maxHeight: "15rem",
          }}
        >
          El usuario o contraseña es incorrecto.
        </DialogContent>
        <DialogActions
          style={{ justifyContent: "center", padding: "2rem 0 1rem" }}
        >
          <div className="o-button-diag">
            <GreenButton type="submit" onClick={() => setDiag(false)}>
              {"Aceptar"}
            </GreenButton>
          </div>
        </DialogActions>
      </Dialog>

      <Backdrop open={loading} className="o-loading" style={{ zIndex: 2 }}>
        <h1>Estamos preparando todo para tí</h1>
        <div className="stage">
          <div className="dot-pulse" />
        </div>
      </Backdrop>
    </div>
  );
};

export default LoginForm;
