import {
  SiNike,
  SiAdidas,
  SiPuma,
  SiReebok,
  SiUnderarmour,
} from "react-icons/si";

import { Flame, Trophy, Dumbbell, Zap, Target, HeartPulse, ShieldCheck, icons } from "lucide-react";

const row1 = [
  {
    name: "Nike",
    icon: SiNike,
  },
  {
    name: "Adidas",
    icon: SiAdidas,
  },
  {
    name: "Puma",
    icon: SiPuma,
  },
  {
    name: "Reebok",
    icon: SiReebok,
  },
  {
    name: "Under Armour",
    icon: SiUnderarmour,
  },
  {
    name: "FitForge",
    icon: Dumbbell,
  },
];

const row2 = [
  {
    text: "Just Do It",
    icon: Flame,
  },
  {
    text: "No Pain No Gain",
    icon: Dumbbell,
  },
  {
    text: "Stay Strong",
    icon: Trophy,
  },
  {
    text: "Discipline",
    icon: Target,
  },
  {
    text: "Consistency",
    icon: Zap,
  },
];

const row3 = [
  {
    text: "Strength",
    icon: Dumbbell,
  },
  {
    text: "Train Hard",
    icon: Flame,
  },
  {
    text: "Power",
    icon: Zap,
  },
  {
    text: "Certified Trainers",
    icon: ShieldCheck,
  },
  {
    text: "FitForge",
    icon: Dumbbell,
  },
  {
    text: "Achieve Goals",
    icon: Trophy,
  },
];

const MarqueeRow = ({ items, animation }) => {
  return (
    <div className="overflow-hidden">
      <div className={`flex w-max whitespace-nowrap ${animation}`}>
        {[...items, ...items].map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index} className="flex items-center gap-3 px-6">
              {Icon && <Icon size={22} className="text-zinc-950" />}

              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-900">
                {item.name ? item.name : item.text} 
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const HeroMarquee = () => {
  return (
    <section className="relative overflow-hidden border border-black bg-white py-6 backdrop-blur-xl">
      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-zinc-800/80 to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-zinc-800/80 to-transparent" />

      <div className="space-y-5">
        <MarqueeRow items={row1} animation="animate-marquee-left" />
        <MarqueeRow items={row2} animation="animate-marquee-right" />
        <MarqueeRow items={row3} animation="animate-marquee-left-slow" />
      </div>
    </section>
  );
};

export default HeroMarquee;
