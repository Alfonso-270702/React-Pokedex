import { ADD_FAVOURITE_POKEMON, SET_POKEMONS, SET_LOADING } from "./types";

export const addFavouritePokemon = (pokemon) => {
  return {
    type: ADD_FAVOURITE_POKEMON,
    payload: pokemon,
  };
};

export function setPokemons(pokemons) {
  return {
    type: SET_POKEMONS,
    payload: pokemons,
  };
}

export function setLoading(status) {
  return {
    type: SET_LOADING,
    payload: status,
  };
}

export function setPokemonsAsync(url) {
  return (dispatch) => {
    dispatch(setLoading(true));
    fetch(url)
      .then((res) => res.json())
      .then((responseData) => {
        dispatch(setPokemons(responseData.cards));
      })
      .catch(console.log)
      .finally((_) => {
        dispatch(setLoading(false));
      });
  };
}
