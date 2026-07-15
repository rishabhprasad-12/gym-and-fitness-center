import SectionDivider from "../common/SectionDivider";
import ContactForm from "./ContactForm";
import GoogleMap from "./GoogleMap";

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 py-24">
        <ContactForm />

        <GoogleMap />
      </div>

      <SectionDivider />
    </section>
  );
};

export default ContactSection;
