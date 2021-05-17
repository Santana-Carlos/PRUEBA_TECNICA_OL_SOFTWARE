import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const GreenButton = withStyles((theme) => ({
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
    background: "linear-gradient(45deg, #8BC247, #649B21)",
    "&:hover": {
      background: "linear-gradient(45deg, #71A82D, #4A7D0C)",
    },
  },
}))(Button);

export default GreenButton;
