import { useState } from "react";

function FetchPokemon(url) {
  const [data, setData] = useState([]);
  const [errData, setErrData] = useState(null);
  const [loadData, setLoadData] = useState(false);

  function SearchPokemon(name) {
    setLoadData(true);
    fetch(url + `?name=${name}`)
      .then((res) => res.json())
      .then((responseData) => {
        setData(responseData.cards);
      })
      .catch((err) => setErrData(err.message))
      .finally((_) => {
        setLoadData(false);
      });
  }

  return {
    data,
    errData,
    loadData,
    SearchPokemon,
  };
}

export default FetchPokemon;
