import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  CardColumns,
  Spinner,
  Card,
  Row,
  Col,
} from "react-bootstrap";

function Detail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [loadPokemon, setLoadPokemon] = useState(false);

  useEffect(() => {
    setLoadPokemon(true);
    fetch(`https://api.pokemontcg.io/v1/cards?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data.cards[0]);
      })
      .catch(console.log)
      .finally((_) => {
        setLoadPokemon(false);
      });
  }, [id]);
  if (loadPokemon) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner
          animation="border"
          role="status"
          style={{ width: "500px", height: "500px" }}
        />
      </div>
    );
  } else {
    return (
      <>
        <Container>
          <div className="d-flex justify-content-center mt-5">
            <Row>
              <Col md={4}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={pokemon.imageUrlHiRes} />
                </Card>
              </Col>
              <Col md={8}>
                <div>
                  <h1>{pokemon.name}</h1>
                  <ul>
                    <li>Type: {pokemon.types}</li>
                    <li>Super Type: {pokemon.supertype}</li>
                    <li>Sub Type: {pokemon.subtype}</li>
                    <li>Hp: {pokemon.hp}</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </>
    );
  }
}

export default Detail;
