import React, { Component } from 'react'
import {Button} from 'react-bootstrap';

export class PokemonForm extends Component {
    constructor(){
        super()
        this.state = {
            inputPokemonName: ''
        }
    }

    submitForm = (event) => {
        event.preventDefault()
        this.props.searchPokemonName(this.state.inputPokemonName)
    }

    handleOnChange = (event) => {
        this.setState({
            inputPokemonName: event.target.value
        })
    }

    render() {
        const {inputPokemonName} = this.state
        return (
            <>
              <form onSubmit={this.submitForm} className="d-flex justify-content-center mt-5">
                  <input type="text" placeholder="Search Pokemon Name" value={inputPokemonName} onChange={this.handleOnChange} />
                  <Button type="submit" className="btn ml-2">Search</Button>
              </form>  
            </>
        )
    }
}

export default PokemonForm

