import React from "react";
import { Container, CardColumns, Spinner, Row, Col } from "react-bootstrap";
import PokemonCard from "./PokemonCard";

function PokemonList(props) {
  const { pokemons, errPokemons, loadPokemons } = props;
  return (
    <>
      {loadPokemons && (
        <div className="d-flex justify-content-center mt-5">
          <Spinner
            animation="border"
            role="status"
            style={{ width: "500px", height: "500px" }}
          />
        </div>
      )}
      <Container>
        <CardColumns className="mt-5">
          {pokemons.map((pokemon) => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
          })}
        </CardColumns>
        {errPokemons && <h4>{errPokemons}</h4>}
      </Container>
    </>
  );
}

export default PokemonList;