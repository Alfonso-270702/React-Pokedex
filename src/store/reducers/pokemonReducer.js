import { ADD_FAVOURITE_POKEMON } from "../actions/types";
import Swal from "sweetalert2";

const initialState = {
  pokemons: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE_POKEMON:
      Swal.fire({
        icon: "success",
        title: "Success add Favourite",
      });
      return { loading: false, pokemons: [action.payload, ...state.pokemons] };
    default:
      return state;
  }
};
