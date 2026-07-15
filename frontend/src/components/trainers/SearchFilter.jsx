import { Search } from "lucide-react";

const filters = ["All", "Strength", "Cardio", "Yoga", "CrossFit", "Nutrition"];

const SearchFilter = ({
  searchTerm,
  setSearchTerm,
  activeFilter,
  setActiveFilter,
}) => {
  return (
    <section className="bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Search */}

        <div className="mx-auto max-w-2xl">
          <div className="flex items-center rounded-2xl border border-white/10 bg-zinc-900/70 px-5 py-4 backdrop-blur-xl">
            <Search className="mr-3 text-zinc-500" size={20} />

            <input
              type="text"
              placeholder="Search trainer by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent text-white placeholder:text-zinc-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Filter Pills */}

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-lime-400 text-black"
                  : "border border-white/10 bg-zinc-900 text-zinc-300 hover:border-lime-400/40 hover:text-lime-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;
