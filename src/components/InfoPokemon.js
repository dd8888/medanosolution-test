import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { StyledGrid } from "../styledComponents/StyledGrid";
import { StyledPaper } from "../styledComponents/StyledPaper";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { useHistory } from "react-router-dom";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    backgroundColor: "#2b2b2b",
    color: "white",
    display: "table",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "10%",
  },
  media: {
    height: 70,
  },
}));
function InfoPokemon(props) {
  const history = useHistory();
  const routeChange = () => {
    history.push({
      pathname: "/",
    });
  };
  const classes = useStyles();
  return (
    <div className="App">
      <div>
        <NavBar></NavBar>
        <Zoom in={true}>
          <Card className={classes.root}>
            <CardActionArea>
              <img
                width="200"
                src={props.location.state.pokemon.img}
                alt="pokemon"
              ></img>

              <CardContent>
                <Typography
                  style={{ textTransform: "capitalize" }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {props.location.state.pokemon.name}
                </Typography>
                <span>
                  Type/s:{" "}
                  {props.location.state.pokemon.types.map((item, i) => (
                    <span key={i} className="pokemonData">
                      {item.type.name}{" "}
                    </span>
                  ))}
                </span>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                ></Typography>
                <StyledGrid style={{ marginTop: "20px" }} item xs={12}>
                  <span className="pokemonData">Abilities:</span>
                  <StyledGrid
                    style={{ padding: "20px" }}
                    container
                    justify="center"
                    spacing={2}
                  >
                    {props.location.state.pokemon.abilities.map((ability) => (
                      <StyledGrid key={ability.ability.name} item>
                        <StyledPaper
                          style={{
                            padding: "20px",
                            textTransform: "capitalize",
                            backgroundColor: "#D30A40",
                          }}
                        >
                          <span className="pokemonData">
                            {ability.ability.name}
                          </span>
                        </StyledPaper>
                      </StyledGrid>
                    ))}
                  </StyledGrid>
                </StyledGrid>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="secondary"
                onClick={() => routeChange()}
              >
                Go back
              </Button>
            </CardActions>
          </Card>
        </Zoom>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default InfoPokemon;
