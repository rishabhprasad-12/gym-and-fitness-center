import { useState } from "react";
import { contactFaqs } from "../../data/contact/contactFaq";
import FAQItem from "../common/FAQItem";
import SectionDivider from "../common/SectionDivider";

const ContactFAQ = () => {
  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 to-zinc-900">
      {/* Background Glow */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-lime-400/5 blur-3xl" />
      <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-lime-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 py-24">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">
            FAQs
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Frequently Asked
            <span className="text-lime-400"> Questions</span>
          </h2>

          <p className="mt-4 text-zinc-400">
            Find quick answers to the most common questions about visiting,
            memberships, and getting started at FitForge.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {contactFaqs.map((faq) => (
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

export default ContactFAQ;
