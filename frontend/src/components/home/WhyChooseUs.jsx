import { Dumbbell, BadgeCheck, HeartPulse, ArrowRight } from "lucide-react";
import whyChooseUs from "../../assets/images/whyChooseUs.jpg";

const features = [
  {
    icon: BadgeCheck,
    title: "Certified Trainers",
    description:
      "Our experienced coaches create personalized workout plans and guide you throughout your fitness journey.",
  },
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    description:
      "Train with premium machines, free weights, and dedicated workout zones designed for every fitness level.",
  },
  {
    icon: HeartPulse,
    title: "Personal Training",
    description:
      "Get one-on-one coaching, progress tracking, and nutrition guidance to achieve faster results.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="mx-auto max-w-7xl  px-6 py-20">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="text-sm uppercase tracking-[4px] text-lime-400">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            More Than Just A Gym
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            We combine expert coaching, world-class facilities, and a supportive
            community to help you become stronger every day.
          </p>
        </div>

        {/* Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative">
            <img
              src={whyChooseUs}
              alt="Gym"
              className="h-[550px] w-full rounded-3xl object-cover"
            />

            {/* Experience Badge */}
            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/70 px-6 py-5 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-lime-400">12+</h3>

              <p className="text-zinc-300">Years of Excellence</p>
            </div>
          </div>

          {/* Right Feature Cards */}
          <div className="space-y-6">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group flex flex-col items-start gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-lime-400/30 hover:bg-white/10 md:flex-row md:items-center"
                >
                  {/* Icon */}
                  <div className="rounded-2xl bg-lime-400/10 p-5">
                    <Icon
                      size={34}
                      className="text-lime-400 transition group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-zinc-400">{feature.description}</p>
                  </div>

                  {/* CTA */}
                  <button className="flex items-center gap-2 text-lime-400 transition hover:gap-3">
                    Learn More
                    <ArrowRight size={18} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
    </section>
  );
};

export default WhyChooseUs;
