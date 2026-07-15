import BusinessHours from "../../components/contact/BusinessHours";
import ContactFAQ from "../../components/contact/ContactFAQ";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactSection from "../../components/contact/ContactSection";
import Hero from "../../components/contact/Hero";
import CTA from "../../components/common/CTA";

const Contact = () => {
  return (
    <div>
      <Hero />
      <ContactInfo />
      <ContactSection />
      <ContactFAQ />
      <BusinessHours />
      <CTA />
    </div>
  )
}

export default Contact
