import chooseImage from "../../assets/images/about/why-choose.jpg";

import { Award, Dumbbell, WalletCards, Users, ArrowRight } from "lucide-react";
import SectionDivider from "../common/SectionDivider";

const features = [
  {
    number: "01",
    icon: Award,
    title: "Certified Trainers",
    description:
      "Qualified trainers providing expert guidance and personalized fitness support.",
  },
  {
    number: "02",
    icon: Dumbbell,
    title: "Modern Equipment",
    description:
      "Train with premium strength and cardio equipment in a comfortable environment.",
  },
  {
    number: "03",
    icon: WalletCards,
    title: "Flexible Memberships",
    description:
      "Choose plans that fit your lifestyle, schedule, and fitness goals.",
  },
  {
    number: "04",
    icon: Users,
    title: "Supportive Community",
    description:
      "A motivating atmosphere that encourages consistency and healthy living.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
            Why Choose FitForge
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            More Than Just
            <span className="block text-lime-400">A Fitness Platform</span>
          </h2>
        </div>

        <div className="grid gap-16">
          {/* Left */}

          <div>
            <img
              src={chooseImage}
              alt="Why Choose FitForge"
              className="rounded-[32px] object-cover"
            />
          </div>

          {/* Right */}

          <div className="space-y-8">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.number}
                  className="group flex gap-6 border-b border-white/10 pb-8"
                >
                  <div className="text-4xl font-bold text-zinc-700">
                    {feature.number}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="rounded-xl bg-lime-400/10 p-3">
                          <Icon size={22} className="text-lime-400" />
                        </div>

                        <h3 className="text-2xl font-semibold text-white">
                          {feature.title}
                        </h3>
                      </div>

                      <ArrowRight
                        size={20}
                        className="text-zinc-500 transition group-hover:translate-x-1 group-hover:text-lime-400"
                      />
                    </div>

                    <p className="mt-4 leading-7 text-zinc-400">
                      {feature.description}
                    </p>
                  </div>
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

export default WhyChooseUs;
