import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
//   Chrome,
} from "lucide-react";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 6) {
      alert("Password should be at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!formData.agree) {
      alert("Please accept Terms & Conditions.");
      return;
    }

    console.log(formData);

    // Later
    // axios.post("/api/auth/register", formData)
  };

  return (
    <div className="w-full max-w-md">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-3xl">
        <span className="inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">
          Join FitForge 💪
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white">
          Create Your
          <span className="block text-lime-400">Account</span>
        </h2>

        <p className="mt-4 leading-7 text-zinc-400">
          Become a member and start your fitness journey today.
        </p>

        {/* Benefits */}

        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full bg-lime-400/10 px-3 py-2 text-xs text-lime-400">
            ✓ 2500+ Members
          </span>

          <span className="rounded-full bg-lime-400/10 px-3 py-2 text-xs text-lime-400">
            ✓ Track Progress
          </span>

          <span className="rounded-full bg-lime-400/10 px-3 py-2 text-xs text-lime-400">
            ✓ Book Classes
          </span>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Full Name */}

          <div className="relative">
            <User
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 text-white outline-none transition focus:border-lime-400 focus:bg-white/10"
            />
          </div>

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
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 text-white outline-none transition focus:border-lime-400 focus:bg-white/10"
            />
          </div>

          {/* Phone */}

          <div className="relative">
            <Phone
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 text-white outline-none transition focus:border-lime-400 focus:bg-white/10"
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
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-14 text-white outline-none transition focus:border-lime-400 focus:bg-white/10"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-lime-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {/* Confirm Password */}

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-14 text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-lime-400 focus:bg-white/10"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 transition hover:text-lime-400"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Terms */}

          <label className="flex items-start gap-3 text-sm text-zinc-400">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mt-1 accent-lime-400"
            />

            <span>
              I agree to the{" "}
              <Link to="/terms" className="text-lime-400 hover:text-lime-300">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-lime-400 hover:text-lime-300">
                Privacy Policy
              </Link>
            </span>
          </label>

          {/* Register */}

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-lime-400 to-lime-500 py-4 font-semibold text-black transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(163,230,53,0.35)]"
          >
            <UserPlus size={20} />
            Create Account
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

        {/* Login */}

        <p className="mt-8 text-center text-zinc-400">
          Already have an account?
          <Link
            to="/auth/login"
            className="ml-2 font-semibold text-lime-400 hover:text-lime-300"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;