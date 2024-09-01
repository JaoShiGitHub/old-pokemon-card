"use client";

import { useState, useEffect } from "react";

const POKEMON_URL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

export default function Pokemons() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      const getPokemons = await fetch(
        `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/1`
      );
      const pokemons = await getPokemons.json();
      setData(pokemons);
    }
    fetchPokemons();
  }, []);

  console.log(data);

  return <div></div>;
}
