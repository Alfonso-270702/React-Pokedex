import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function PokemonCard(props) {
  const { pokemon } = props;
  const history = useHistory();
  function detailPage(id) {
    history.push(`/detail/${id}`);
  }
  return (
    <Card>
      <Card.Img variant="top" src={pokemon.imageUrlHiRes} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text>{pokemon.type} </Card.Text>
        <Button variant="primary" onClick={() => detailPage(pokemon.id)}>
          Detail
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;
