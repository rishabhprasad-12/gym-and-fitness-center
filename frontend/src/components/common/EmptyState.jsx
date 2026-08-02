import { Inbox } from "lucide-react";

const EmptyState = ({ title, description, buttonText, onButtonClick }) => {
  return (
    <div className="rounded-3xl border border-dashed border-zinc-700 bg-zinc-900 py-20 text-center">
      <Inbox size={48} className="mx-auto text-zinc-500" />

      <h3 className="mt-5 text-2xl font-semibold text-white">{title}</h3>

      <p className="mt-2 text-zinc-400">{description}</p>

      {buttonText && (
        <button
          onClick={onButtonClick}
          className="mt-6 rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black hover:bg-lime-500"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;