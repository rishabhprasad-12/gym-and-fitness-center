import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="w-full max-w-md">
      {/* Glass Card */}

      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-3xl">
        {/* Badge */}

        <span className="inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">
          Welcome Back 👋
        </span>

        {/* Heading */}

        <h2 className="mt-6 text-4xl font-bold text-white">
          Continue Your
          <span className="block text-lime-400">Fitness Journey</span>
        </h2>

        <p className="mt-4 leading-7 text-zinc-400">
          Login to access your memberships, schedules, trainers and personalized
          dashboard.
        </p>

        {/* Stats */}

        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
            <h3 className="text-2xl font-bold text-lime-400">2500+</h3>

            <p className="mt-1 text-xs text-zinc-400">Members</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
            <h3 className="text-2xl font-bold text-lime-400">18</h3>

            <p className="mt-1 text-xs text-zinc-400">Trainers</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
            <h3 className="text-2xl font-bold text-lime-400">35+</h3>

            <p className="mt-1 text-xs text-zinc-400">Classes</p>
          </div>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Email */}

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-lime-400 focus:bg-white/10"
            />
          </div>

          {/* Password */}

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-14 text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-lime-400 focus:bg-white/10"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 transition hover:text-lime-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Remember */}

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-zinc-400">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="accent-lime-400"
              />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-sm text-lime-400 hover:text-lime-300"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login */}

          <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-lime-400 to-lime-500 py-4 font-semibold text-black transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(163,230,53,0.35)]">
            <LogIn size={20} />
            Login
          </button>
        </form>

        {/* Divider */}

        <div className="my-8 flex items-center">
          <div className="h-px flex-1 bg-white/10" />

          <span className="mx-4 text-sm text-zinc-500">OR</span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Google */}

        <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white py-4 font-medium text-black transition hover:bg-zinc-100">
          {/* <Chrome size={20} /> */}
          Continue with Google
        </button>

        {/* Register */}

        <p className="mt-8 text-center text-zinc-400">
          Don't have an account?
          <Link
            to="/auth/register"
            className="ml-2 font-semibold text-lime-400 hover:text-lime-300"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
