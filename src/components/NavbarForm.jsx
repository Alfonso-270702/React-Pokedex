import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import usePokemonForm from "../hooks/usePokemonForm";
import { navTheme } from "../App";

function NavbarForm(props) {
  const { searchPokemonName } = props;

  const history = useHistory();

  const {
    submitForm,
    handleOnChange,
    input: inputPokemonName,
  } = usePokemonForm(searchPokemonName);

  function toHomePage() {
    history.push("/");
    setColor("dark");
  }
  function toFavouritePage() {
    history.push("/favourite-pokemon");
    setColor("secondary");
  }
  const { themeColor, setColor } = useContext(navTheme);

  return (
    <navTheme.Consumer>
      {({ themeColor, setColor }) => (
        <Navbar bg={themeColor} variant="dark">
          <Navbar.Brand>Poke Poke</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={toHomePage}>Home</Nav.Link>
            <Nav.Link onClick={toFavouritePage}>Favourite</Nav.Link>
          </Nav>
          <Form inline onSubmit={submitForm}>
            <FormControl
              type="text"
              placeholder="Search Pokemon"
              className="mr-sm-2"
              value={inputPokemonName}
              onChange={handleOnChange}
            />
            <Button variant="outline-info" type="submit">
              Search
            </Button>
          </Form>
        </Navbar>
      )}
    </navTheme.Consumer>
  );
}

export default NavbarForm;
