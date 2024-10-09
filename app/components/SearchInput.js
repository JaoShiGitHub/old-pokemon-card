"use client";

import { useState, useEffect } from "react";
const POKEMON_URL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

export default function SearchInput() {
  const [searchPokemon, setSearchPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);

  function handleSetSearchPokemon(e) {
    setSearchPokemon(e.target.value);
    console.log(searchPokemon);
  }

  async function handleSearchBtn() {
    const pokemonKeyword = searchPokemon.toLowerCase();
    setSearchPokemon("");
    try {
      const response = await fetch(`${POKEMON_URL}${pokemonKeyword}`);
      const data = await response.json();
      console.log("Data retrieved:", data);
      setPokemonData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
