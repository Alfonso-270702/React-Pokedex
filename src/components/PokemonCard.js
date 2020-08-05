import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavouritePokemon } from "../store/actions/pokemonAction";

function PokemonCard(props) {
  const { pokemon } = props;

  const history = useHistory();

  const dispatch = useDispatch();

  const { url } = useRouteMatch();

  let status = "inline";
  if (url === "/favourite-pokemon") {
    status = "none";
  }

  function detailPage(id) {
    history.push(`/detail/${id}`);
  }

  function addToFavourite(data) {
    dispatch(addFavouritePokemon(data));
  }

  return (
    <Card>
      <Card.Img variant="top" src={pokemon.imageUrlHiRes} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text>{pokemon.type} </Card.Text>
        <Button
          variant="primary"
          className="btn-sm"
          onClick={() => detailPage(pokemon.id)}
          style={{ display: `${status}` }}
        >
          Detail
        </Button>
        <Button
          className="ml-2 btn-sm"
          variant="primary"
          onClick={() => addToFavourite(pokemon)}
          style={{ display: `${status}` }}
        >
          Add Favourite
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;
