import { StyledGrid } from "../styledComponents/StyledGrid";
import { StyledPaper } from "../styledComponents/StyledPaper";
import { useHistory } from "react-router-dom";
import Grow from "@material-ui/core/Grow";
export function PokemonList(props) {
  const history = useHistory();
  const routeChange = (pokemonData) => {
    history.push({
      pathname: "/info",
      search: "?id=" + pokemonData.id,
      state: { pokemon: pokemonData },
    });
  };
  return props.array.map((item, i) => (
    <StyledGrid key={i} item onClick={() => routeChange(item)}>
      <Grow
        in={true}
        style={{ transformOrigin: "0 0 0" }}
        {...(true ? { timeout: 1500 } : {})}
      >
        <StyledPaper>
          <span className="infoPokemon" id=":sm:">
            <span className="pokemonId">#{item.id}</span>
            <img src={item.img} alt="pokemon"></img>
            {item.name}
          </span>
        </StyledPaper>
      </Grow>
    </StyledGrid>
  ));
}
