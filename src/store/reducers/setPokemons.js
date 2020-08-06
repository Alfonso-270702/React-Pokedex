import { SET_POKEMONS, SET_LOADING } from "../actions/types";

const initialState = {
  data: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { loading: false, data: action.payload };
    case SET_LOADING:
      return { loading: action.payload, data: state.data };
    default:
      return state;
  }
};
