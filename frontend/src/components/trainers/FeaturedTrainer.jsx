import { Award, Dumbbell, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import SectionDivider from "../../components/common/SectionDivider";
import trainerImage from "../../assets/images/trainers/rahul.jpg";

const FeaturedTrainer = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">
            Featured Coach
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Meet Our Head
            <span className="text-lime-400">Fitness Coach</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Dedicated to helping members unlock their full potential through
            personalized coaching and years of practical fitness experience.
          </p>
        </div>

        {/* Card */}
        <div className="grid items-center gap-12 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8 lg:grid-cols-2 lg:p-14">
          {/* Left Image */}
          <div className="relative flex justify-center">
            <div className="absolute h-80 w-80 rounded-full bg-lime-400/10 blur-3xl"></div>

            <img
              src={trainerImage}
              alt="Rahul Singh"
              className="relative z-10 w-full max-w-md object-contain rounded-4xl"
            />
          </div>

          {/* Right Content */}
          <div>
            <span className="rounded-full bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">
              Head Trainer
            </span>

            <h3 className="mt-5 text-5xl font-bold text-white">Rahul Singh</h3>

            <p className="mt-3 text-lg text-zinc-300">
              Cardio & Functional Training Coach
            </p>

            <p className="mt-6 leading-8 text-zinc-400">
              Rahul has spent more than 8 years helping individuals build
              strength, improve endurance, and develop sustainable fitness
              habits. His coaching focuses on proper technique, progressive
              training, and long-term health.
            </p>

            {/* Stats */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-lime-400/40 hover:bg-lime-400/5">
                <Award className="mx-auto mb-3 text-lime-400" />
                <h4 className="text-2xl font-bold text-white">8+</h4>
                <p className="text-sm text-zinc-400">Years Experience</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-lime-400/40 hover:bg-lime-400/5">
                <Users className="mx-auto mb-3 text-lime-400" />
                <h4 className="text-2xl font-bold text-white">500+</h4>
                <p className="text-sm text-zinc-400">Members Trained</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-lime-400/40 hover:bg-lime-400/5">
                <Dumbbell className="mx-auto mb-3 text-lime-400" />
                <h4 className="text-2xl font-bold text-white">4</h4>
                <p className="text-sm text-zinc-400">Certifications</p>
              </div>
            </div>

            {/* Button */}
            <Link
              to="#"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-lime-500"
            >
              View Profile
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default FeaturedTrainer;
