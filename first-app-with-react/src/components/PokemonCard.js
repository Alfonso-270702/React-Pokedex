import React from 'react'
import {Card, Button} from 'react-bootstrap';

class PokemonCard extends React.Component{
    render() {
        const { pokemon } = this.props
        return (
        <Card>
            <Card.Img variant="top" src={pokemon.imageUrl} />
            <Card.Body>
                <Card.Title>{pokemon.name}</Card.Title>
                <Card.Text>{pokemon.type} </Card.Text>
                <Button variant="primary">Detail</Button>
            </Card.Body>
        </Card>
        )
    }
}

export default PokemonCard