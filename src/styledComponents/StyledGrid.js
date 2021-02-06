import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

export const StyledGrid = withStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "#212121",
    padding: "2%",
    paddingTop: "2%",
    maxWidth: "100%",
  },
})(Grid);
