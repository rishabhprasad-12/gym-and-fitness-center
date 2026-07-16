import { Dumbbell, Users, ShieldCheck } from "lucide-react";

import bannerImage from "../../assets/images/auth/auth-banner.png";

const benefits = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
  },
  {
    icon: Users,
    title: "Certified Trainers",
  },
  {
    icon: ShieldCheck,
    title: "Supportive Community",
  },
];

const AuthBanner = () => {
  return (
    <div className="relative hidden overflow-hidden bg-gradient-to-br from-zinc-950 via-black to-zinc-900 lg:flex">
      {/* Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="relative z-10 flex w-full flex-col justify-center px-14">
        <span className="mb-5 inline-flex w-fit rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">
          Welcome to FitForge
        </span>

        <h1 className="text-5xl font-bold leading-tight text-white">
          Build a<span className="block text-lime-400">Stronger You.</span>
        </h1>

        <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-400">
          Join a community that inspires healthier lifestyles through
          professional coaching, modern facilities, and personalized fitness
          experiences.
        </p>

        {/* Benefits */}
        <div className="mt-12 space-y-5">
          {benefits.map((item) => (
            <div key={item.title} className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">
                <item.icon size={22} />
              </div>

              <p className="font-medium text-white">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PNG Athlete */}
      <img
        src={bannerImage}
        alt="Fitness Athlete"
        className="absolute bottom-0 right-0 h-[90%] object-contain opacity-75"
      />
    </div>
  );
};

export default AuthBanner;
