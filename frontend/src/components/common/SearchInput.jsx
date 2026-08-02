import { Search } from "lucide-react";

const SearchInput = ({ placeholder, value, onChange }) => {
  return (
    <div className="relative mb-8">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
      />

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 py-3 pl-12 pr-4 text-white placeholder:text-zinc-500 focus:border-lime-400 focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;
