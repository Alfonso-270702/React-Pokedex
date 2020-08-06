import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import favouritePokemon from "./reducers/pokemonReducer";
import setPokemons from "./reducers/setPokemons";

const combine = combineReducers({
  favouritePokemon,
  setPokemons,
});

const store = createStore(combine, applyMiddleware(thunk));

export default store;
