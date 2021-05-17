import React, { useState } from "react";
import {
  Table,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TablePagination,
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
} from "@material-ui/core";
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  People as PeopleIcon,
} from "@material-ui/icons";
import {
  BlueButton,
  GreenButton,
  RedButton,
} from "../../Components/StyledComponents";
import { useHandleChange } from "../../Hooks/HandleChange";
import data from "../../Assets/data.json";
import "./Seccion.css";

const columnWidth = ["16%", "16%", "26%", "10%", "10%", "12%", "10%"];

const SeccionRoles = (props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [users, setUsers] = useState(data.users_data);
  const [diag, setDiag] = useState("none");
  const [form, setForm] = useState({
    id: "",
    pass: "",
    nombres: "",
    apellidos: "",
    rol: "",
    telefono: "",
    correo: "",
    estado: "",
  });

  const handleClose = () => {
    const value = form;
    switch (diag) {
      case "add":
        setUsers((prevUsers) => [value, ...prevUsers]);
        break;
      case "edit":
        delUser();
        setTimeout(() => setUsers((prevUsers) => [value, ...prevUsers]), 100);
        break;
      default:
        break;
    }
    setDiag("none");
  };

  const addUser = () => {
    clearTemp();
    setDiag("add");
  };

  const editUser = (obj) => {
    setForm({
      id: obj.id,
      pass: obj.pass,
      nombres: obj.nombres,
      apellidos: obj.apellidos,
      rol: obj.rol,
      telefono: obj.telefono,
      correo: obj.correo,
      estado: obj.estado,
    });
    setDiag("edit");
  };

  const delUser = () => {
    const value = form.id;
    const temp = users.filter((x) => x.id !== value);
    setUsers(temp);
    setDiag("none");
  };

  const clearTemp = () => {
    setForm({
      id: "",
      pass: "",
      nombres: "",
      apellidos: "",
      rol: "",
      telefono: "",
      correo: "",
      estado: "",
    });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="o-roles-container">
      <div className="o-roles-table-bigcontainer">
        <div className="o-roles-table-titulo">
          <div className="o-roles-row">
            <PeopleIcon
              style={{ marginRight: "0.5rem" }}
              size="large"
              color="inherit"
            />
            <h2>Usuarios existentes</h2>
          </div>
          <div className="o-roles-btn-add">
            <BlueButton onClick={addUser}>Crear</BlueButton>
          </div>
        </div>
        <TableContainer className="o-roles-table-container">
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                <TableCell style={{ minWidth: columnWidth[0] }}>
                  Nombres
                </TableCell>
                <TableCell style={{ minWidth: columnWidth[1] }}>
                  Apellidos
                </TableCell>
                <TableCell style={{ minWidth: columnWidth[2] }}>
                  Id. (C.C.)
                </TableCell>
                <TableCell style={{ minWidth: columnWidth[3] }}>
                  Rol asociado
                </TableCell>
                <TableCell style={{ minWidth: columnWidth[4] }}>
                  Estado
                </TableCell>
                <TableCell style={{ minWidth: columnWidth[5] }}>
                  Teléfono
                </TableCell>
                <TableCell style={{ minWidth: columnWidth[6] }}>
                  Correo eléctronico
                </TableCell>
                <TableCell style={{ minWidth: columnWidth[7] }}>
                  Acción
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => (
                  <TableRow hover tabIndex={-1} key={i}>
                    <TableCell style={{ minWidth: columnWidth[0] }}>
                      {row.nombres}
                    </TableCell>
                    <TableCell style={{ minWidth: columnWidth[1] }}>
                      {row.apellidos}
                    </TableCell>
                    <TableCell style={{ minWidth: columnWidth[2] }}>
                      {row.id}
                    </TableCell>
                    <TableCell style={{ minWidth: columnWidth[3] }}>
                      {row.rol}
                    </TableCell>
                    <TableCell style={{ minWidth: columnWidth[4] }}>
                      {row.estado ? "Activo" : "Inactivo"}
                    </TableCell>
                    <TableCell style={{ minWidth: columnWidth[5] }}>
                      {row.telefono}
                    </TableCell>
                    <TableCell style={{ minWidth: columnWidth[6] }}>
                      {row.correo}
                    </TableCell>
                    <TableCell>
                      <div className="o-roles-table-btnicon">
                        <IconButton
                          size="small"
                          color="primary"
                          onClick={() => editUser(row)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          size="small"
                          color="secondary"
                          onClick={() => {
                            setForm((prevForm) => ({
                              ...prevForm,
                              id: row.id,
                            }));
                            setDiag("del");
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 8, 10]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={diag === "add" || diag === "edit"}
        maxWidth={false}
      >
        <DialogTitle>
          <h2>Usuario</h2>
        </DialogTitle>
        <div className="o-roles-diag"></div>
        <DialogContent>
          <div className="o-roles-contentform-big">
            <div className="o-roles-contentform">
              <div className="o-roles-label">Nombres</div>
              <div className="o-roles-boxspacing">
                <TextField
                  value={form.nombres}
                  onChange={(e) =>
                    setForm((prevForm) => ({
                      ...prevForm,
                      nombres: e.target.value,
                    }))
                  }
                  className="o-space"
                  variant="outlined"
                  margin="dense"
                />
              </div>

              <div className="o-roles-label">Identificación (C.C.)</div>
              <div className="o-roles-boxspacing">
                <TextField
                  value={form.id}
                  onChange={(e) =>
                    setForm((prevForm) => ({
                      ...prevForm,
                      id: e.target.value,
                    }))
                  }
                  disabled={diag === "edit"}
                  className="o-space"
                  variant="outlined"
                  margin="dense"
                />
              </div>

              <div className="o-roles-label">Estado</div>
              <Select
                value={form.estado}
                onChange={(e) =>
                  setForm((prevForm) => ({
                    ...prevForm,
                    estado: e.target.value,
                  }))
                }
                className="o-space"
                style={{ marginTop: "8px" }}
                variant="outlined"
                margin="dense"
                className="o-roles-boxspacing"
              >
                <MenuItem value={true}>Activo</MenuItem>
                <MenuItem value={false}>Inactivo</MenuItem>
              </Select>

              <div className="o-roles-label">Teléfono</div>
              <div className="o-roles-boxspacing">
                <TextField
                  value={form.telefono}
                  onChange={(e) =>
                    setForm((prevForm) => ({
                      ...prevForm,
                      telefono: e.target.value,
                    }))
                  }
                  className="o-space"
                  variant="outlined"
                  margin="dense"
                />
              </div>
            </div>

            <div className="o-roles-contentform">
              <div className="o-roles-label">Apellidos</div>
              <div className="o-roles-boxspacing">
                <TextField
                  value={form.apellidos}
                  onChange={(e) =>
                    setForm((prevForm) => ({
                      ...prevForm,
                      apellidos: e.target.value,
                    }))
                  }
                  className="o-space"
                  variant="outlined"
                  margin="dense"
                />
              </div>

              <div className="o-roles-label">Rol asociado</div>
              <div className="o-roles-boxspacing">
                <TextField
                  value={form.rol}
                  onChange={(e) =>
                    setForm((prevForm) => ({
                      ...prevForm,
                      rol: e.target.value,
                    }))
                  }
                  className="o-space"
                  variant="outlined"
                  margin="dense"
                />
              </div>

              <div className="o-roles-label">Contraseña</div>
              <div className="o-roles-boxspacing">
                <TextField
                  value={form.pass}
                  onChange={(e) =>
                    setForm((prevForm) => ({
                      ...prevForm,
                      pass: e.target.value,
                    }))
                  }
                  className="o-space"
                  type="password"
                  variant="outlined"
                  margin="dense"
                />
              </div>

              <div className="o-roles-label">Correo eléctronico</div>
              <div className="o-roles-boxspacing">
                <TextField
                  value={form.correo}
                  onChange={(e) =>
                    setForm((prevForm) => ({
                      ...prevForm,
                      correo: e.target.value,
                    }))
                  }
                  className="o-space"
                  variant="outlined"
                  margin="dense"
                />
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions style={{ justifyContent: "center" }}>
          <div className="o-roles-btn-diag">
            <RedButton
              onClick={() => {
                setDiag("none");
                clearTemp();
              }}
            >
              Cancelar
            </RedButton>
          </div>
          <div className="o-roles-btn-diag">
            <GreenButton onClick={() => handleClose()}>Guardar</GreenButton>
          </div>
        </DialogActions>
      </Dialog>

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={diag === "del"}
        maxWidth={false}
      >
        <DialogTitle style={{ textAlign: "center" }}>
          {"¿Desea eliminar el usuario?"}
        </DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions style={{ justifyContent: "center" }}>
          <div className="o-roles-btn-diag">
            <RedButton onClick={() => delUser()}>Eliminar</RedButton>
          </div>
          <div className="o-roles-btn-diag">
            <GreenButton
              onClick={() => {
                setDiag("none");
                clearTemp();
              }}
            >
              Cancelar
            </GreenButton>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SeccionRoles;
