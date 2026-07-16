import {
  User,
  Mail,
  Phone,
  Target,
  Activity,
  Pencil,
  CreditCard,
} from "lucide-react";

const ProfileSummary = () => {
  return (
    <div className="rounded-[32px] border border-zinc-800 bg-zinc-900 p-7">
      {/* Avatar */}

      <div className="flex flex-col items-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-lime-400/10 border border-lime-400/20">
          <User size={42} className="text-lime-400" />
        </div>

        <h3 className="mt-5 text-2xl font-bold text-white">Ayush Anand</h3>

        <span className="mt-2 rounded-full bg-lime-400/10 px-4 py-1 text-sm font-medium text-lime-400">
          Premium Member
        </span>
      </div>

      {/* Contact */}

      <div className="mt-8 space-y-5">
        <div className="flex items-center gap-3">
          <Mail className="text-lime-400" size={18} />
          <span className="text-zinc-400">rishabh@email.com</span>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="text-lime-400" size={18} />
          <span className="text-zinc-400">+91 98765 43210</span>
        </div>
      </div>

      {/* Divider */}

      <div className="my-7 border-t border-zinc-800" />

      {/* Goal */}

      <div className="space-y-5">
        <div className="flex items-start gap-3">
          <Target className="mt-1 text-lime-400" size={20} />

          <div>
            <p className="text-sm text-zinc-500">Fitness Goal</p>

            <h4 className="font-semibold text-white">Build Muscle</h4>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Activity className="mt-1 text-lime-400" size={20} />

          <div>
            <p className="text-sm text-zinc-500">BMI</p>

            <h4 className="font-semibold text-white">23.5 (Healthy)</h4>
          </div>
        </div>
      </div>

      {/* Buttons */}

      <div className="mt-8 space-y-3">
        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-700 px-4 py-3 font-medium text-white transition hover:border-lime-400 hover:text-lime-400">
          <Pencil size={18} />
          Edit Profile
        </button>

        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 px-4 py-3 font-semibold text-black transition hover:bg-lime-500">
          <CreditCard size={18} />
          View Membership
        </button>
      </div>
    </div>
  );
};

export default ProfileSummary;
