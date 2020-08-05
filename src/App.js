import React from "react";
import NavbarForm from "./components/NavbarForm";
import useFetchPokemon from "./hooks/useFetchPokemon";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Detail } from "./pages";

function App() {
  const { SearchPokemon } = useFetchPokemon(
    "https://api.pokemontcg.io/v1/cards"
  );

  const searchPokemonName = (name) => {
    SearchPokemon(name);
  };

  return (
    <>
      <Router>
        <NavbarForm searchPokemonName={searchPokemonName} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
