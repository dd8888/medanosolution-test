/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import { StyledGrid } from "../styledComponents/StyledGrid";
import { StyledTextField } from "../styledComponents/StyledTextField";
import { useForm } from "react-hook-form";
import { Footer } from "../components/Footer";
import { StyledButton } from "../styledComponents/StyledButton";
import { StyledCircularProgress } from "../styledComponents/StyledCircularProgress";
import { PokemonList } from "../components/PokemonList";
import { NavBar } from "../components/NavBar";
import { withRouter } from "react-router";
import { useTranslation } from "react-i18next";

function Main() {
  const [pokemons, setPokemons] = useState([]);
  const { register, handleSubmit } = useForm();
  const [searchPokemon, setSearchPokemon] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const pokemonTypes = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Clear selection",
  ];
  const { t, i18n } = useTranslation("common");

  const onSubmit = (data) => setSearchPokemon(data);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then((response) =>
      response.data.results.forEach(function (pokemon) {
        axios.get(pokemon.url).then((response) => {
          let newPokemon = {
            name: response.data.name,
            img: response.data.sprites.front_default,
            types: response.data.types,
            id: response.data.id,
            abilities: response.data.abilities,
          };
          setPokemons((pokemons) => [...pokemons, newPokemon]);
        });
      })
    );
  }, []);

  useEffect(() => {
    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().startsWith(searchPokemon.pokemoname)
    );
    setSearchResult(filteredPokemons);
  }, [searchPokemon]);

  useEffect(() => {
    let newPokemons = [];
    if (selectedFilter.toString() === "Clear selection") {
      setSearchPokemon("");
      setFilteredPokemon([]);
    }
    pokemons.forEach((pokemon) => {
      if (
        pokemon.types.filter(
          (types) =>
            types["type"]["name"] === selectedFilter.toString().toLowerCase()
        ).length > 0
      ) {
        newPokemons.push(pokemon);
      }
    });
    setFilteredPokemon(newPokemons);
  }, [selectedFilter]);

  let shownList;
  if (searchResult.length > 0) {
    shownList = <PokemonList array={searchResult}></PokemonList>;
  } else if (filteredPokemon.length > 0) {
    shownList = <PokemonList array={filteredPokemon}></PokemonList>;
  } else {
    shownList = <PokemonList array={pokemons}></PokemonList>;
  }

  return (
    <div className="App">
      {pokemons.length === 151 ? (
        <div>
          <NavBar></NavBar>
          <div className="forms">
            <form onSubmit={handleSubmit(onSubmit)}>
              <StyledTextField
                name="pokemoname"
                id="outlined-basic"
                label={t("searchby.text")}
                variant="outlined"
                color="secondary"
                inputRef={register}
              />
            </form>
            <span>{t("filter.text")}</span>
            <StyledGrid item xs={12}>
              {pokemonTypes.map((item, i) => (
                <StyledButton key={i} onClick={() => setSelectedFilter(item)}>
                  {item}
                </StyledButton>
              ))}
            </StyledGrid>
          </div>
          <StyledGrid container spacing={2}>
            <StyledGrid item xs={12}>
              <StyledGrid container justify="center" spacing={2}>
                {shownList}
              </StyledGrid>
            </StyledGrid>
          </StyledGrid>
          <Footer></Footer>
        </div>
      ) : (
        <div className="loadingMessage">
          <p>{t("loading.text")}</p> <StyledCircularProgress />{" "}
        </div>
      )}
    </div>
  );
}

export default withRouter(Main);
