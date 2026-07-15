import ContactCard from "./ContactCard";
import { contactInfo } from "../../data/contact/contactInfo";
import SectionDivider from "../common/SectionDivider";

const ContactInfo = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 to-zinc-900">
      {/* Glow */}
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-lime-400/5 blur-3xl" />
      <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-lime-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* Heading */}
        
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">
            Contact Details
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Let's Start a<span className="text-lime-400"> Conversation</span>
          </h2>

          <p className="mt-4 text-zinc-400">
            Reach out through any of the following channels. We're always ready
            to help you begin your fitness journey.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {contactInfo.map((item, index) => (
            <ContactCard key={item.id} {...item} index={index} />
          ))}
        </div>
      </div>

      <SectionDivider />
    </section>
  );
};

export default ContactInfo;
