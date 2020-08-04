import React from "react";
import PokemonList from "./components/PokemonList";
import PokemonForm from "./components/PokemonForm";
import { Container } from "react-bootstrap";
import useFetchPokemon from "./hooks/useFetchPokemon";

function App() {
  const {
    data: pokemons,
    errData: errPokemons,
    loadData: loadPokemons,
    SearchPokemon,
  } = useFetchPokemon("https://api.pokemontcg.io/v1/cards");

  const searchPokemonName = (name) => {
    SearchPokemon(name);
  };

  return (
    <Container>
      <PokemonForm searchPokemonName={searchPokemonName} />
      <PokemonList
        pokemons={pokemons}
        errPokemons={errPokemons}
        loadPokemons={loadPokemons}
      />
    </Container>
  );
}

export default App;
