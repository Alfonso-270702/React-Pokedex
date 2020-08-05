import React from "react";
import PokemonList from "../components/PokemonList";
import { Container } from "react-bootstrap";
import useFetchPokemon from "../hooks/useFetchPokemon";

function Home() {
  const {
    data: pokemons,
    errData: errPokemons,
    loadData: loadPokemons,
  } = useFetchPokemon("https://api.pokemontcg.io/v1/cards");

  return (
    <Container>
      <PokemonList
        pokemons={pokemons}
        errPokemons={errPokemons}
        loadPokemons={loadPokemons}
      />
    </Container>
  );
}

export default Home;
