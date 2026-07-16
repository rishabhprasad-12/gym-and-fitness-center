import { BadgeCheck, HeartHandshake, ShieldCheck, Target } from "lucide-react";
import SectionDivider from "../common/SectionDivider";

const benefits = [
  {
    icon: BadgeCheck,
    title: "Certified Professionals",
    description:
      "Train with experienced and certified fitness coaches committed to helping you reach your goals.",
  },
  {
    icon: Target,
    title: "Personalized Guidance",
    description:
      "Every workout plan is tailored to your fitness level, lifestyle, and personal objectives.",
  },
  {
    icon: HeartHandshake,
    title: "Motivation & Support",
    description:
      "Stay consistent with continuous encouragement, accountability, and expert guidance.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Training",
    description:
      "Learn proper techniques that improve performance while reducing the risk of injury.",
  },
];

const WhyTrainWithUs = () => {
  return (
    <section className="bg-gradient-to-t from-zinc-950 to-zinc-900">
      <div className="relative overflow-hidden py-24">
        {/* Background Glow */}
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-lime-400/5 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-lime-400/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Heading */}

          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">
              Why Choose Our Trainers
            </span>

            <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
              Train Smarter,
              <span className="text-lime-400"> Achieve Faster</span>
            </h2>

            <p className="mt-4 text-zinc-400">
              Our trainers provide expert guidance, personalized programs, and
              continuous support to help you transform your fitness journey.
            </p>
          </div>

          {/* Cards */}

          <div className="grid gap-8 md:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group flex flex-col justify-between rounded-3xl border border-white/10 p-8 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-lime-400/30"
                >
                  <div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 transition-all duration-300 group-hover:scale-110">
                      <Icon size={30} />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-white">
                      {benefit.title}
                    </h3>

                    <p className="mt-4 leading-7 text-zinc-400">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="mt-8 h-1 w-16 rounded-full bg-lime-400 transition-all duration-300 group-hover:w-28"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default WhyTrainWithUs;
