import React from "react";
import { Button } from "react-bootstrap";
import usePokemonForm from "../hooks/usePokemonForm";

function PokemonForm(props) {
  const { searchPokemonName } = props;
  const {
    submitForm,
    handleOnChange,
    input: inputPokemonName,
  } = usePokemonForm(searchPokemonName);

  return (
    <>
      <form
        onSubmit={submitForm}
        className="d-flex justify-content-center mt-5"
      >
        <input
          type="text"
          placeholder="Search Pokemon Name"
          value={inputPokemonName}
          onChange={handleOnChange}
        />
        <Button type="submit" className="btn ml-2">
          Search
        </Button>
      </form>
    </>
  );
}

export default PokemonForm;
