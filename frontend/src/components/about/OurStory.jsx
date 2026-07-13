import storyImage from "../../assets/images/about/gym-interior.jpg";
import SectionDivider from "../../components/common/SectionDivider"

import { Users, Dumbbell, CalendarDays, Trophy } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "2500+",
    label: "Happy Members",
  },
  {
    icon: Dumbbell,
    value: "18",
    label: "Expert Trainers",
  },
  {
    icon: CalendarDays,
    value: "35+",
    label: "Weekly Classes",
  },
  {
    icon: Trophy,
    value: "12+",
    label: "Fitness Programs",
  },
];

const OurStory = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-950 to-zinc-900 ">
      <div className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          {/* Image */}

          <div className="relative">
            <img
              src={storyImage}
              alt="Our Story"
              className="h-[520px] w-full rounded-3xl object-cover"
            />

            {/* Floating Card */}

            <div className="absolute -bottom-6 right-6 rounded-2xl border border-white/10 bg-zinc-900/80 p-6 backdrop-blur-xl">
              <h3 className="text-4xl font-bold text-lime-400">2026</h3>

              <p className="text-zinc-300">Internship Project</p>
            </div>
          </div>

          {/* Content */}

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
              Our Story
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Building Fitness Through Technology
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              FitForge was created to demonstrate how technology can improve
              everyday fitness management. From exploring memberships to
              scheduling classes and managing trainers, every feature focuses on
              providing a simple and intuitive user experience.
            </p>

            <p className="mt-6 leading-8 text-zinc-400">
              Developed using the MERN Stack as an internship project, FitForge
              combines responsive design, authentication, role-based access, and
              clean user interfaces to simulate a modern gym management
              platform.
            </p>
          </div>
        </div>

        {/* Statistics */}

        <div className="mx-auto mt-20 grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-zinc-900 p-6 transition hover:-translate-y-1 hover:border-lime-400/30"
              >
                <Icon size={30} className="mb-5 text-lime-400" />

                <h3 className="text-3xl font-bold text-white">{item.value}</h3>

                <p className="mt-2 text-zinc-400">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default OurStory;
