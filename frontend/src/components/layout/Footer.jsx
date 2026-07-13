import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import { MdOutlineFacebook } from "react-icons/md";
import { AiOutlineInstagram, AiOutlineX } from "react-icons/ai";


import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-12 py-16">
        {/* Top */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="text-3xl font-bold text-white">
              Fit<span className="text-lime-400">Forge</span>
            </Link>

            <p className="mt-5 text-zinc-400 leading-7">
              Transform your body, improve your health, and unlock your full
              potential with expert coaching and premium facilities.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-full border border-zinc-700 p-2 text-zinc-400 transition hover:border-lime-400 hover:text-lime-400"
              >
                <MdOutlineFacebook size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-zinc-700 p-2 text-zinc-400 transition hover:border-lime-400 hover:text-lime-400"
              >
                <AiOutlineInstagram size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-zinc-700 p-2 text-zinc-400 transition hover:border-lime-400 hover:text-lime-400"
              >
                <AiOutlineX size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>

            <ul className="mt-5 space-y-3 text-zinc-400">
              <li>
                <Link to="/" className="hover:text-lime-400">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-lime-400">
                  About
                </Link>
              </li>

              <li>
                <Link to="/membership" className="hover:text-lime-400">
                  Membership
                </Link>
              </li>

              <li>
                <Link to="/trainers" className="hover:text-lime-400">
                  Trainers
                </Link>
              </li>

              <li>
                <Link to="/schedule" className="hover:text-lime-400">
                  Schedule
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-semibold text-white">Programs</h3>

            <ul className="mt-5 space-y-3 text-zinc-400">
              <li>Strength Training</li>

              <li>Cardio Fitness</li>

              <li>Yoga Classes</li>

              <li>HIIT Workout</li>

              <li>Personal Training</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white">Contact</h3>

            <div className="mt-5 space-y-5 text-zinc-400">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-lime-400" size={18} />
                <span>Guwahati, Assam, India</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-lime-400" size={18} />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-lime-400" size={18} />
                <span>support@fitforge.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-zinc-800" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-zinc-500 md:flex-row">
          <p>© {new Date().getFullYear()} FitForge. All rights reserved.</p>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-lime-400">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-lime-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
