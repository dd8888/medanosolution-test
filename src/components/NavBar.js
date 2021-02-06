import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { StyledBar } from "../styledComponents/StyledBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import logo from "../images/pokedex.png";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  "@global": {
    ".langSelector": {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
}));

export function NavBar() {
  const history = useHistory();
  const classes = useStyles();
  const { t, i18n } = useTranslation("common");

  return (
    <div className={classes.root}>
      <StyledBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <img
            src={logo}
            width="200"
            alt="pokedex"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/")}
          ></img>
          <Typography variant="h6" className={classes.title}></Typography>
          <Button
            className="langSelector"
            color="secundary"
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </Button>
          <Button
            className="langSelector"
            color="secundary"
            onClick={() => i18n.changeLanguage("es")}
          >
            ES
          </Button>
          <Button
            onClick={() =>
              history.push({
                pathname: "/regions",
              })
            }
            color="inherit"
          >
            {t("navbar.regions")}
          </Button>
          <Button
            onClick={() =>
              history.push({
                pathname: "/about",
              })
            }
            color="inherit"
          >
            {t("navbar.about")}
          </Button>
        </Toolbar>
      </StyledBar>
    </div>
  );
}
