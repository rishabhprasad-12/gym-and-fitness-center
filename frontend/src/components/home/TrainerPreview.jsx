import { Award } from "lucide-react";
import { Link } from "react-router-dom";

import trainer1 from "../../assets/images/trainer1.jpg";
import trainer2 from "../../assets/images/trainer2.jpg";
import trainer3 from "../../assets/images/trainer3.jpg";

const trainers = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Strength Coach",
    experience: "8 Years Experience",
    image: trainer1,
    skills: ["Strength", "Nutrition"],
  },
  {
    id: 2,
    name: "Sarah Lee",
    role: "Yoga Instructor",
    experience: "6 Years Experience",
    image: trainer2,
    skills: ["Yoga", "Flexibility"],
  },
  {
    id: 3,
    name: "John Carter",
    role: "Cardio Specialist",
    experience: "10 Years Experience",
    image: trainer3,
    skills: ["HIIT", "Weight Loss"],
  },
];

const TrainerPreview = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="mx-auto max-w-7xl py-24 px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[4px] text-lime-400">
            Our Trainers
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Meet Our Fitness Experts
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            Our certified trainers are here to guide, motivate, and help you
            achieve your fitness goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-lime-400/40"
            >
              {/* Image */}
              <img
                src={trainer.image}
                alt={trainer.name}
                className="mx-auto h-40 w-40 rounded-full object-cover border-4 border-zinc-800 transition duration-300 group-hover:border-lime-400"
              />

              {/* Name */}
              <h3 className="mt-6 text-2xl font-semibold text-white">
                {trainer.name}
              </h3>

              {/* Role */}
              <p className="mt-2 text-lime-400">{trainer.role}</p>

              {/* Experience */}
              <div className="mt-5 flex items-center justify-center gap-2 text-zinc-400">
                <Award size={18} />
                {trainer.experience}
              </div>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {trainer.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-lime-400/10 px-3 py-1 text-sm text-lime-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Button */}
              <Link
                to="/trainers"
                className="mt-8 inline-block rounded-xl border border-zinc-700 px-6 py-3 text-white transition hover:border-lime-400 hover:text-lime-400"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/trainers"
            className="inline-flex rounded-xl bg-lime-400 px-8 py-3 font-semibold text-black transition hover:bg-lime-500"
          >
            View All Trainers
          </Link>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
    </section>
  );
};

export default TrainerPreview;
