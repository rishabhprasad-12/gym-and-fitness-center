import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    memberSince: "Member since 2023",
    review:
      "FitForge completely transformed my fitness journey. The trainers are supportive and the environment keeps me motivated every day.",
  },
  {
    name: "Priya Singh",
    memberSince: "Member since 2022",
    review:
      "The personalized workout plans and nutrition guidance helped me achieve results I never thought possible.",
  },
  {
    name: "Aman Verma",
    memberSince: "Member since 2024",
    review:
      "Modern equipment, friendly staff, and an amazing atmosphere. I genuinely enjoy every workout session.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 ">
      <div className="mx-auto max-w-7xl py-24 px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[4px] text-lime-400">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            What Our Members Say
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            Hear directly from people who have transformed their lives at
            FitForge.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-lime-400/40"
            >
              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-lime-400 text-lime-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="leading-7 text-zinc-300">"{review.review}"</p>

              {/* User */}
              <div className="mt-8 border-t border-zinc-800 pt-5">
                <h4 className="font-semibold text-white">{review.name}</h4>

                <p className="text-sm text-zinc-500">{review.memberSince}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
    </section>
  );
};

export default Testimonials;
