import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

export const StyledButton = withStyles({
  root: {
    backgroundColor: "#2b2b2b",
    borderColor: "#D30A40",
    color: "#D30A40",
    margin: "10px",
    "&:hover": {
      borderColor: "#D30A40",
      color: "#D30A40",
    },
  },
})(Button);
