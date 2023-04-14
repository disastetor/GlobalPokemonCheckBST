import { useEffect, useState } from 'react';

const pokeList = () => {
  const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279';
  const [pokedex, setPokedex] = useState([]);
  useEffect(() => {
    const pokeList = fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setPokedex(res.results);
        //console.log(res);
      })
      .catch((err) => console.log('err'));
  }, []);
  //console.log(pokedex);
  return pokedex;
};

export default pokeList;
