import React, { useEffect } from "react";
import PokemonList from "../components/PokemonList";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonsAsync } from "../store/actions/pokemonAction";

function Home(props) {
  const { data } = props;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPokemonsAsync("https://api.pokemontcg.io/v1/cards"));
  }, []);

  const pokemons = useSelector((state) => state.setPokemons.data);
  const loadPokemons = useSelector((state) => state.setPokemons.loading);

  return (
    <Container>
      <PokemonList
        pokemons={pokemons}
        pokemonSearch={data}
        loadPokemons={loadPokemons}
      />
    </Container>
  );
}

export default Home;
