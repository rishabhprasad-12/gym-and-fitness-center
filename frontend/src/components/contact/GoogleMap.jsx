const GoogleMap = () => {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-lime-400/10 via-zinc-900 to-black p-6">
      <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-sm text-lime-400">
        Find Us
      </span>

      <h2 className="mt-5 text-3xl font-bold text-white">
        Visit Our Fitness Center
      </h2>

      <p className="mt-3 text-zinc-400">
        Experience our facilities in person. We'd love to welcome you.
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
        <iframe
          title="FitForge Location"
          src="https://www.google.com/maps?q=Guwahti,Assam&output=embed"
          width="100%"
          height="420"
          loading="lazy"
          className="border-0"
        />
      </div>
    </div>
  );
};

export default GoogleMap;
