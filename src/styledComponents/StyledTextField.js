import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

export const StyledTextField = withStyles({
  root: {
    marginTop: "5%",
    "& label.Mui-focused": {
      color: "#bababa",
    },
    "& input": {
      color: "#bababa",
    },
    "& label": {
      color: "#bababa",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#bababa",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#bababa",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#bababa",
      },
    },
  },
})(TextField);
