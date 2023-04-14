import { useEffect, useState } from 'react';
import './Pokemon.css';

const PokemonFetch = (props) => {
  const [pokemon, setPokemon] = useState(null);
  const url = props.pokemonUrl;
  useEffect(() => {
    const pokeList = fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setPokemon(res);
        //console.log(res);
      })
      .catch((err) => console.log('err'));
  }, []);

  if (pokemon) {
    //console.log(pokemon);

    // Pokemon info
    const name = pokemon.name;
    const imgUrl = pokemon.sprites.other.home.front_default;
    const totalBST =
      pokemon.stats[0].base_stat +
      pokemon.stats[1].base_stat +
      pokemon.stats[2].base_stat +
      pokemon.stats[3].base_stat +
      pokemon.stats[4].base_stat +
      pokemon.stats[5].base_stat;

    return (
      <div className="card-poke">
        <div className="title-poke">
          {<h3 className="title-poke-child">{name}</h3>}
        </div>
        <div className="img-container-poke">
          <img
            className="image-poke"
            src={imgUrl ? imgUrl : '/pokeball.svg'}
            alt={name}
          />
        </div>
        <div className="bst-poke">
          <h3>BST: {totalBST}</h3>
        </div>
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
};
export default PokemonFetch;
