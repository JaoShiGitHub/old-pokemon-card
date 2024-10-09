"use client";

import { useState, useEffect } from "react";

const POKEMON_URL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

export default function Pokemons(pokemon) {
  // const [data, setData] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");

  // useEffect(() => {
  //   async function fetchPokemons() {
  //     const getPokemons = await fetch(
  //       `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/1`
  //     );
  //     const pokemons = await getPokemons.json();
  //     setData(pokemons);
  //   }

  //   fetchPokemons();
  // }, []);

  // console.log(data);

  function handleSetSearchPokemon(e) {
    console.log(searchPokemon);
    setSearchPokemon(e.target.value);
  }

  return (
    <input
      className="w-full bg-card px-7  text-sm py-2 text-white"
      type="text"
      value={searchPokemon}
      onChange={handleSetSearchPokemon}
      placeholder="Search for Pokémon Name or ID"
    />
  );
}
