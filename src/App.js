import React, { useState } from "react";
import NavbarForm from "./components/NavbarForm";
import useFetchPokemon from "./hooks/useFetchPokemon";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Detail, FavouritePage } from "./pages";

export const navTheme = React.createContext();

function App() {
  const { data, SearchPokemon } = useFetchPokemon(
    "https://api.pokemontcg.io/v1/cards"
  );

  const searchPokemonName = (name) => {
    SearchPokemon(name);
  };

  const [themeColor, setThemeColor] = useState("primary");

  return (
    <>
      <navTheme.Provider
        value={{
          themeColor,
          setColor: (color) => setThemeColor(color),
        }}
      >
        <Router>
          <NavbarForm searchPokemonName={searchPokemonName} />
          <Switch>
            <Route exact path="/">
              <Home data={data} />
            </Route>
            <Route path="/detail/:id">
              <Detail />
            </Route>
            <Route path="/favourite-pokemon">
              <FavouritePage />
            </Route>
          </Switch>
        </Router>
      </navTheme.Provider>
    </>
  );
}

export default App;
