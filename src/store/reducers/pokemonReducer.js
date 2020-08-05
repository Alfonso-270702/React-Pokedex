import { ADD_FAVOURITE_POKEMON } from "../actions/types";

const initialState = {
  pokemons: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE_POKEMON:
      return { loading: false, pokemons: [action.payload, ...state.pokemons] };
    default:
      return state;
  }
};
