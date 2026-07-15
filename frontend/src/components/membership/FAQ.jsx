import { useState } from "react";

import FAQItem from "../common/FAQItem";
import { faqData } from "../../data/membership/faqData";
import SectionDivider from "../common/SectionDivider";

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="mx-auto max-w-4xl px-6 py-24">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Frequently Asked
            <span className="block text-lime-400">Questions</span>
          </h2>

          <p className="mt-5 text-zinc-400">
            Have questions? Here are some of the most common queries about our
            membership plans.
          </p>
        </div>

        {/* FAQ List */}

        <div className="space-y-5">
          {faqData.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default FAQ;
