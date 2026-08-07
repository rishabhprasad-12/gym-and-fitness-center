import { LockKeyhole, SearchX, ShieldX, TriangleAlert } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const errorData = {
  401: {
    code: "401",
    title: "Login Required",
    description: "Please login to continue and access this page.",
    buttonText: "Login",
    buttonLink: "/login",
    icon: LockKeyhole,
  },

  403: {
    code: "403",
    title: "Access Denied",
    description: "You don't have permission to access this page.",
    buttonText: "Go Home",
    buttonLink: "/",
    icon: ShieldX,
  },

  404: {
    code: "404",
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist or has been moved.",
    buttonText: "Go Home",
    buttonLink: "/",
    icon: SearchX,
  },

  500: {
    code: "500",
    title: "Something Went Wrong",
    description:
      "Our server encountered an unexpected error. Please try again.",
    buttonText: "Retry",
    buttonLink: "",
    icon: TriangleAlert,
  },
};

const ErrorPage = () => {
  const { code } = useParams();
  const navigate = useNavigate();

  const error = errorData[code] || errorData["404"];
  const Icon = error.icon;

  const handlePrimaryAction = () => {
    if (code === "500") {
      window.location.reload();
      return;
    }

    navigate(error.buttonLink);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-lime-400/10 blur-[180px]" />

      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-lime-500/5 blur-[180px]" />

      <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-white/5 blur-[150px]" />

      {/* Huge Error Code */}

      <h1 className="pointer-events-none absolute select-none text-[10rem] font-black leading-none text-white/[0.03] md:text-[18rem]">
        FitForge
      </h1>

      {/* Content */}

      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        {/* Icon */}

        <div className="flex h-28 w-28 items-center justify-center rounded-full border border-lime-400/30 bg-lime-400/10 shadow-[0_0_60px_rgba(163,230,53,0.18)]">
          <Icon size={52} className="text-lime-400" />
        </div>

        {/* Code */}

        <h2 className="mt-10 text-7xl font-black text-white md:text-8xl">
          {error.code}
        </h2>

        {/* Title */}

        <h3 className="mt-4 text-4xl font-bold text-white">{error.title}</h3>

        {/* Description */}

        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
          {error.description}
        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <button
            onClick={handlePrimaryAction}
            className="rounded-xl bg-lime-400 px-8 py-3 font-semibold text-black transition hover:bg-lime-500"
          >
            {error.buttonText}
          </button>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-8 py-3 font-semibold text-white transition hover:border-lime-400 hover:bg-zinc-800"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;