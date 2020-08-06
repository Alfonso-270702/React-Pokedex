import React from "react";
import { CardColumns, Spinner, Row, Col } from "react-bootstrap";
import PokemonCard from "./PokemonCard";

function PokemonList(props) {
  const { pokemons, errPokemons, loadPokemons, pokemonSearch } = props;

  if (pokemonSearch.length > 0) {
    return (
      <CardColumns className="mt-5">
        {pokemonSearch.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </CardColumns>
    );
  } else {
    return (
      <>
        {loadPokemons && (
          <div className="d-flex justify-content-center mt-5">
            <Spinner
              animation="border"
              role="status"
              style={{ width: "400px", height: "400px" }}
              className="text-info"
            />
          </div>
        )}
        <CardColumns className="mt-5">
          {pokemons.map((pokemon) => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
          })}
        </CardColumns>
        {errPokemons && <h4>{errPokemons}</h4>}
      </>
    );
  }
}

export default PokemonList;
