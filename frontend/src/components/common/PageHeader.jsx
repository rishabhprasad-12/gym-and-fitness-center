import { Plus } from "lucide-react";

const PageHeader = ({ title, description, buttonText, onButtonClick }) => {
  return (
    <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white">{title}</h1>

        <p className="mt-2 text-zinc-400">{description}</p>
      </div>

      {buttonText && (
        <button
          onClick={onButtonClick}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-lime-400 px-5 py-3 font-semibold text-black transition hover:bg-lime-500"
        >
          <Plus size={18} />
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default PageHeader;
