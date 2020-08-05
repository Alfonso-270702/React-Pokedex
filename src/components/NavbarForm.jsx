import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import usePokemonForm from "../hooks/usePokemonForm";

function NavbarForm(props) {
  const { searchPokemonName } = props;
  const {
    submitForm,
    handleOnChange,
    input: inputPokemonName,
  } = usePokemonForm(searchPokemonName);

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/">Home</Link>
        <Link to="/detail">Detail</Link>
      </Nav>
      <Form inline onSubmit={submitForm}>
        <FormControl
          type="text"
          placeholder="Search Pokemon"
          className="mr-sm-2"
          value={inputPokemonName}
          onChange={handleOnChange}
        />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}

export default NavbarForm;
