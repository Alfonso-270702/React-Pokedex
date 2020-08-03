import React from 'react';
import {Container,CardColumns} from 'react-bootstrap';
import PokemonCard from './PokemonCard'

class PokemonList extends React.Component{
  render(){
    const { pokemons } = this.props
    return(
    <Container>
        <CardColumns className="mt-5">
        {
            pokemons && pokemons.map(pokemon => {
                return (<PokemonCard key={pokemon.id} pokemon={pokemon}/>)
            })
        }
        </CardColumns>
    </Container>
    )
  }
}

export default PokemonList