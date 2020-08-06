import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import usePokemonForm from "../hooks/usePokemonForm";

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
  }
  function toFavouritePage() {
    history.push("/favourite-pokemon");
  }

  return (
    <Navbar bg="dark" variant="dark">
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
  );
}

export default NavbarForm;
