import React from 'react';
import PokemonList from './components/PokemonList'
import PokemonForm from './components/PokemonForm'
import {Container} from 'react-bootstrap'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      pokemons: []
    }
  }

  componentDidMount(){
    fetch("https://api.pokemontcg.io/v1/cards")
    .then(res => res.json())
    .then(data => {
      this.setState({
        pokemons: data.cards
      })
    })
    .catch(console.log)
  }

  searchPokemonName = (name) => {
    fetch(`https://api.pokemontcg.io/v1/cards?name=${name}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        pokemons: data.cards
      })
    })
    .catch(console.log)
  }

  render(){
    const {pokemons} = this.state
    return (
      <Container>
        <PokemonForm searchPokemonName={this.searchPokemonName} />
        <PokemonList pokemons={pokemons}/>
      </Container>
    )
  }
}

export default App;
