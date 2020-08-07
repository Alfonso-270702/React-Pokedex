import React from "react";
import { Container, CardColumns } from "react-bootstrap";
import { useSelector } from "react-redux";
import PokemonCard from "../components/PokemonCard";

function FavouritePage() {
  const pokemons = useSelector((state) => state.favouritePokemon.pokemons);

  return (
    <Container data-testid="fav-card">
      <CardColumns className="mt-5">
        {pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </CardColumns>
    </Container>
  );
}

export default FavouritePage;
