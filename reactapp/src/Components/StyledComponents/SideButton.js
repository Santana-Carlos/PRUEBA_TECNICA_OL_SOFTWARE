import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

export const SideButton = withStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
    textTransform: "none",
    color: "#FFFFFF",
    borderRadius: 0,
    margin: 0,
    fontSize: "1.1rem",
    fontWeight: 400,
    textAlign: "start",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.05)",
    },
  },
}))(Button);

export default SideButton;
