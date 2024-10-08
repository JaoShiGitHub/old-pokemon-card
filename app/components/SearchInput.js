export default function SearchInput() {
  return (
    <div className="flex w-full justify-between">
      <input
        className="w-full bg-card pr-7 py-2 text-white outline-none"
        placeholder="Search for Pokémon Name or ID"
      />
      <button>🔍</button>
    </div>
  );
}
