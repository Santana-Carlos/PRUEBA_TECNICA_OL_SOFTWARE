import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const BlueButton = withStyles((theme) => ({
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
    background: "linear-gradient(45deg, #42ACF0, #193AC2)",
    "&:hover": {
      transitionDuration: "background 2s ease",
      background: "linear-gradient(45deg, #6784FF, #142D97)",
    },
  },
}))(Button);

export default BlueButton;
