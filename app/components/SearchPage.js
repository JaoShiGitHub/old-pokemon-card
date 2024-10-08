import Pokemons from "./Pokemons";

export default function SearchPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img alt="Pokemon" />
      <h1 className="text-white font-bold">Pokémon Search</h1>
      <div className="w-96 flex">
        {/* <input
          className="w-full bg-card px-7 py-2 text-white"
          placeholder="Search for Pokémon Name or ID"
        /> */}
        <div>
          <Pokemons />
        </div>
        <button>
          <img alt="search icon" />
        </button>
      </div>
    </div>
  );
}
