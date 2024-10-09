import SearchInput from "./SearchInput";

export default function SearchPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <img className="w-1/2" alt="Pokemon" src="../pokemon-group-pic.png" />
      <h1 className="text-white font-bold text-3xl">Pokémon Search</h1>
      <div className="w-[850px]  bg-card px-7 py-2 rounded-lg">
        <SearchInput />
      </div>
    </div>
  );
}
