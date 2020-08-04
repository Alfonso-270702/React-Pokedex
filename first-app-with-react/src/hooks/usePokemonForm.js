import { useState } from "react";

function PokemonForm(searchPokemonName) {
  const [input, setInput] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    setInput("");
    searchPokemonName(input);
  };

  const handleOnChange = (event) => {
    setInput(event.target.value);
  };

  return {
    submitForm,
    handleOnChange,
    input,
  };
}

export default PokemonForm;
