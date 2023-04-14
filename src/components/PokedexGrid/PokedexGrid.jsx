import { useState, useEffect, Suspense, lazy } from 'react';
import PokemonFetch from '../Pokemon/PokemonFetch';
import pokedex from '../../pokeList';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './PokedexGrid.css';

const PokedexGrid = () => {
  const [searchName, setsearchName] = useState('');
  const [isFound, setisFound] = useState(false);
  const [singleItem, setSingleItem] = useState([]);
  const pokemonList = pokedex();
  const [fullList, setFullList] = useState([]);

  //console.log('Lista pokemon');
  //console.log(pokemonList);

  //setTimeout(setFullList(pokemonList), 1000);

  const handleClick = () => {
    setisFound(false);
    setSingleItem([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const uno = pokemonList.find((item) => {
      return item.name === searchName;
    });
    if (uno) {
      setisFound(true);
      setSingleItem(uno);
    }
  };

  return (
    <>
      {/* Search bar */}
      <form onSubmit={handleSubmit}>
        <div className="search-bar">
          <div className="input-group rounded">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              value={searchName}
              onChange={(e) => setsearchName(e.target.value)}
            />
            {/*             <span className="input-group-text border-0" id="search-addon">
            <div>
              <i className="fas fa-magnifying-glass"></i>
            </div>
          </span> */}
            {/* <button onClick={handleClick}>Hello</button> */}
          </div>
        </div>
      </form>

      {/*====================
              GRID 
    =======================*/}
      {isFound ? (
        <div className="container-poke">
          <div className="pokemon-card">
            <>
              <PokemonFetch pokemonUrl={singleItem.url} />
            </>
          </div>
        </div>
      ) : (
        <div className="container-poke">
          {pokemonList.map((pokemon, index) => {
            let pokemonUrl = pokemon.url;
            return (
              <div className="pokemon-card" key={index}>
                <>
                  <PokemonFetch pokemonUrl={pokemonUrl} />
                </>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default PokedexGrid;
