"use client";

import { useState, useEffect } from "react";
const POKEMON_URL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

export default function SearchInput() {
  const [searchPokemon, setSearchPokemon] = useState("");
  const [pokemonData, pokemonData] = useState([]);

  function handleSetSearchPokemon(e) {
    setSearchPokemon(e.target.value);
    console.log(searchPokemon);
  }

  function handleSearchBtn() {
    console.log("keyword: ", searchPokemon);
  }
  
  return (
    <div className="flex w-full justify-between">
      <input
        className="w-full bg-card pr-7 py-2 text-white outline-none"
        type="text"
        placeholder="Search for Pokémon Name or ID"
        value={searchPokemon}
        onChange={handleSetSearchPokemon}
      />
      <button onClick={handleSearchBtn}>🔍</button>
    </div>
  );
}
