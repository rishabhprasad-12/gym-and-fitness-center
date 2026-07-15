import { Search } from "lucide-react";

const categories = [
  "All",
  "Strength",
  "Yoga",
  "Cardio",
  "HIIT",
  "CrossFit",
  "Zumba",
];

const SearchFilter = ({
  resultCount,
  searchTerm,
  setSearchTerm,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <section className="pt-20 bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Search */}

        <div className="relative mx-auto max-w-2xl">
          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            type="text"
            placeholder="Search classes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-14 w-full rounded-2xl border border-white/10 bg-zinc-900/70 pl-14 pr-5 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-lime-400/40"
          />
        </div>

        {/* Filter Chips */}

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-lime-400 text-black shadow-lg shadow-lime-400/20"
                  : "border border-white/10 bg-zinc-900/70 text-zinc-300 hover:border-lime-400/30 hover:text-lime-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mt-6 text-center text-sm text-zinc-500">
          Showing{" "}
          <span className="font-semibold text-lime-400">{resultCount}</span>{" "}
          classes
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;
