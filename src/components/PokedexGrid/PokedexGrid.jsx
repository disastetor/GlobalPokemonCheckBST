import { useState, useEffect, Suspense, lazy } from 'react';
import PokemonFetch from '../Pokemon/PokemonFetch';

import './PokedexGrid.css';

const PokedexGrid = () => {
  const [pokedex, setPokedex] = useState([]);
  const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279';
  useEffect(() => {
    const pokeList = fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setPokedex(res.results);
        //console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  //console.log(pokedex);

  return (
    <div className="container">
      {pokedex.map((pokemon, index) => {
        let pokemonUrl = pokemon.url;
        return (
          <div className="pokemon-card" key={index}>
            {/* INSERT POKEMON CARD HERE */}
            <>
              <PokemonFetch pokemonUrl={pokemonUrl} />
            </>
          </div>
        );
      })}
    </div>
  );
};
export default PokedexGrid;
