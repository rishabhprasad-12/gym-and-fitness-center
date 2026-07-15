import benefitsImage from "../../assets/images/membership/benefits.jpg";

import { membershipBenefits } from "../../data/membership/membershipBenefits";
import SectionDivider from "../common/SectionDivider";

const Benefits = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
            Membership Benefits
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            More Than Just
            <span className="block text-lime-400">A Gym Membership</span>
          </h2>

          <p className="mt-5 text-zinc-400">
            Every membership is designed to help you stay consistent, motivated,
            and achieve your fitness goals with confidence.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Image */}

          <div>
            <img
              src={benefitsImage}
              alt="Membership Benefits"
              className="h-[550px] w-full rounded-3xl object-cover"
            />
          </div>

          {/* Right Features */}

          <div className="grid gap-6 sm:grid-cols-2">
            {membershipBenefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="rounded-3xl border border-white/10 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-lime-400/30"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-lime-400/10 p-4">
                    <Icon size={28} className="text-lime-400" />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    {item.description}
                  </p>
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

export default Benefits;
