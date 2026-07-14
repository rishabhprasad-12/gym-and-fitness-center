import { Check, X } from "lucide-react";
import { comparisonData } from "../../data/comparisonData";
import SectionDivider from "../common/SectionDivider";

const ComparisonTable = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
            Compare Plans
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Compare Membership
            <span className="block text-lime-400">Features</span>
          </h2>

          <p className="mt-5 text-zinc-400">
            Compare every membership plan side by side to choose the one that
            best fits your fitness goals.
          </p>
        </div>

        {/* Table */}

        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-zinc-900">
          <table className="min-w-full">
            <thead className="bg-zinc-800">
              <tr>
                <th className="px-6 py-5 text-left text-lg font-semibold text-white">
                  Feature
                </th>

                <th className="px-6 py-5 text-center text-lg font-semibold text-white">
                  Basic
                </th>

                <th className="relative bg-gradient-to-b from-lime-400/20 to-transparent px-6 py-5 text-center">
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400 px-3 py-1 text-xs font-semibold text-black">
                    MOST POPULAR
                  </span>

                  <span className="text-lg font-semibold text-lime-400">
                    Premium
                  </span>
                </th>

                <th className="px-6 py-5 text-center text-lg font-semibold text-white">
                  Elite
                </th>
              </tr>
            </thead>

            <tbody>
              {comparisonData.map((item) => (
                <tr
                  key={item.feature}
                  className="border-t border-white/10 hover:bg-zinc-800/50"
                >
                  <td className="px-6 py-5 text-zinc-300">{item.feature}</td>

                  <td className="px-6 py-5 text-center">
                    {item.basic ? (
                      <Check className="mx-auto text-lime-400" />
                    ) : (
                      <X className="mx-auto text-zinc-600" />
                    )}
                  </td>

                  <td className="bg-lime-400/5 px-6 py-5 text-center">
                    {item.premium ? (
                      <Check className="mx-auto text-lime-400" />
                    ) : (
                      <X className="mx-auto text-zinc-600" />
                    )}
                  </td>

                  <td className="px-6 py-5 text-center">
                    {item.elite ? (
                      <Check className="mx-auto text-lime-400" />
                    ) : (
                      <X className="mx-auto text-zinc-600" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default ComparisonTable;
