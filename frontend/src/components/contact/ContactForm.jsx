import { useState } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Enquiry submitted successfully!");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div
      id="contact-form"
      className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8"
    >
      <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-sm text-lime-400">
        Send Message
      </span>

      <h2 className="mt-5 text-3xl font-bold text-white">
        We'd Love to Hear From You
      </h2>

      <p className="mt-3 text-zinc-400">
        Fill out the form below and our team will contact you shortly.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 text-white outline-none transition focus:border-lime-400"
          required
        />

        <div className="grid gap-5 md:grid-cols-2">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 text-white outline-none focus:border-lime-400"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 text-white outline-none focus:border-lime-400"
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 text-white outline-none focus:border-lime-400"
        />

        <textarea
          rows={6}
          name="message"
          placeholder="Tell us how we can help you..."
          value={formData.message}
          onChange={handleChange}
          className="w-full resize-none rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 text-white outline-none focus:border-lime-400"
          required
        />

        <button className="inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-lime-500">
          Send Message
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
