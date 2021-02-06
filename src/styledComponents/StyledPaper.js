import Paper from "@material-ui/core/Paper";

import { withStyles } from "@material-ui/core/styles";

export const StyledPaper = withStyles({
  root: {
    backgroundColor: "#2b2b2b",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#3b3b3b",
    },
  },
})(Paper);
