import { Plus, Minus } from "lucide-react";

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition-all duration-300 hover:border-lime-400/30 hover:bg-zinc-800/70">
      {/* Question */}

      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <h3 className="text-lg font-semibold text-white">{faq.question}</h3>

        {isOpen ? (
          <Minus className="text-lime-400" />
        ) : (
          <Plus className="text-zinc-400" />
        )}
      </button>

      {/* Answer */}

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="border-t border-white/10 px-6 py-5 leading-7 text-zinc-400">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
