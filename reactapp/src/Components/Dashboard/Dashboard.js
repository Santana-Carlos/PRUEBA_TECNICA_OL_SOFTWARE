import React, { useState } from "react";
import clsx from "clsx";
import { Switch, Route, NavLink, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  List,
  Divider,
  ListItem,
} from "@material-ui/core";
import { SideButton } from "../StyledComponents";
import {
  Menu as MenuIcon,
  Assignment as AssigmentIcon,
  AccountTree as AccountTreeIcon,
  AccountBox as AccountBoxIcon,
  Extension as ExtensionIcon,
  AccessibilityNew as AccessibilityIcon,
  Book as BookIcon,
} from "@material-ui/icons";
import OLLogo from "../../Assets/OLS.png";
import AppBar from "./AppBar";
import SeccionRoles from "../Seccions/SeccionRoles";
import Footer from "./Footer";
import "./Dashboard.css";

const drawerWidth = "290px";
const drawerWidthClose = "76px";
const options = [
  {
    palabra: "Programación",
    url: "/dashboard/programacion",
    obj: <AssigmentIcon />,
  },
  {
    palabra: "Gestión de Operaciones",
    url: "/dashboard/gestion",
    obj: <AccountTreeIcon />,
  },
  {
    palabra: "Perfiles",
    url: "/dashboard/perfiles",
    obj: <AccountBoxIcon />,
  },
  {
    palabra: "Roles",
    url: "/dashboard/roles",
    obj: <ExtensionIcon />,
  },
  {
    palabra: "Usuario",
    url: "/dashboard/usuario",
    obj: <AccessibilityIcon />,
  },
  {
    palabra: "Reportes",
    url: "/dashboard/reportes",
    obj: <BookIcon />,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    color: "#fff",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: drawerWidthClose,
  },
  mainContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    height: "calc(100vh - 90px)",
    backgroundColor: "#F2F2F2",
    marginLeft: drawerWidthClose,
    width: "calc(100vw - " + drawerWidthClose + ")",
  },
  mainContentOpen: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    height: "35px",
    marginLeft: drawerWidth,
    width: "calc(100vw - " + drawerWidth + ")",
    transition: theme.transitions.create(["margin-left", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  mainContentClose: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    height: "35px",
    marginLeft: drawerWidthClose,
    width: "calc(100vw - " + drawerWidthClose + ")",
    transition: theme.transitions.create(["margin-left", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        PaperProps={{
          style: {
            background: "linear-gradient(180deg, #42ACF0, #193AC2)",
            color: "#fff",
          },
        }}
      >
        <List>
          <Link
            to="/dashboard"
            style={{ textDecoration: "none", color: "#fff" }}
            onClick={() => setOpen(false)}
          >
            <ListItem button key={"Main"}>
              <ListItemIcon>
                <img
                  src={OLLogo}
                  alt="OL logo"
                  className="o-dashboard-logoimg"
                />
              </ListItemIcon>
              <ListItemText primary={"OLSoftware"} />
            </ListItem>
          </Link>
        </List>
        <Divider style={{ background: "#fff" }} variant="middle" />
        <List>
          {options.map((x, i) => (
            <ListItem key={i}>
              <NavLink
                to={x.url}
                className="o-dashboard-option-btn o-dashboard-option-btn-inactive"
                activeClassName="o-dashboard-option-btn o-dashboard-option-btn-active"
                onClick={() => setOpen(false)}
              >
                <SideButton style={{ paddingLeft: "10px" }}>
                  <ListItemIcon style={{ color: "#fff" }}>{x.obj}</ListItemIcon>
                  <ListItemText primary={x.palabra} />
                </SideButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div
        className={clsx({
          [classes.mainContentOpen]: open,
          [classes.mainContentClose]: !open,
        })}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          color: "#1D43AD",
          height: "55px",
        }}
      >
        <IconButton onClick={handleDrawer}>
          <MenuIcon style={{ color: "#1D43AD" }} />
        </IconButton>
        <AppBar />
      </div>

      <div className={classes.mainContent} onClick={() => setOpen(false)}>
        <Switch>
          <Route exact path="/dashboard">
            <div className="o-dashboard-option-placeholder">
              Placeholder Dashboard
            </div>
          </Route>
          <Route path={"/dashboard/roles"}>
            <SeccionRoles />
          </Route>
          {options.map((x, i) => (
            <Route path={x.url} key={i}>
              <div className="o-dashboard-option-placeholder">
                Placeholder {x.palabra}
              </div>
            </Route>
          ))}
        </Switch>
      </div>

      <div
        className={clsx({
          [classes.mainContentOpen]: open,
          [classes.mainContentClose]: !open,
        })}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
