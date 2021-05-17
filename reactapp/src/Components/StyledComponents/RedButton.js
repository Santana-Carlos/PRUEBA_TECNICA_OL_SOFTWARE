import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const RedButton = withStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
    color: "#FFFFFF",
    fontSize: "1.1rem",
    margin: 0,
    fontWeight: 400,
    textAlign: "center",
    textTransform: "none",
    borderRadius: "5px",
    background: "linear-gradient(45deg, #FB8383, #FB3A3A)",
    "&:hover": {
      background: "linear-gradient(45deg, #E13434, #A40000)",
    },
  },
}))(Button);

export default RedButton;
