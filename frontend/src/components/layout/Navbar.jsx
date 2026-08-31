import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Membership", path: "/membership" },
  { name: "Trainers", path: "/trainers" },
  { name: "Schedule", path: "/schedule" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const hasSession = Boolean(token && user);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsMenuOpen(false);
    navigate("/auth/login");
  };

  return (
    <nav className="sticky top-4 z-50 px-4">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-6 backdrop-blur-xl shadow-lg shadow-black/20">
        <Link to="/" className="text-2xl font-bold tracking-wide text-white">
          Fit<span className="text-lime-400">Forge</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-lime-400"
                      : "text-zinc-300 hover:text-lime-400"
                  } transition-colors`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          {hasSession ? (
            <>
              <NavLink
                to="/customer/dashboard"
                className="text-zinc-300 hover:text-lime-400 transition-colors"
              >
                Dashboard
              </NavLink>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-xl border border-zinc-700 px-4 py-2 text-sm font-medium text-white transition hover:border-lime-400 hover:text-lime-400"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/auth/login"
                className="text-zinc-300 hover:text-lime-400 transition-colors"
              >
                Login
              </NavLink>

              <NavLink
                to="/auth/register"
                className="rounded-xl bg-lime-400 px-5 py-2 font-medium text-black transition hover:scale-105 hover:bg-lime-500"
              >
                Join Now
              </NavLink>
            </>
          )}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isMenuOpen ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-3 rounded-2xl border border-white/10 bg-zinc-900/95 p-6 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-lime-400"
                        : "text-zinc-300 hover:text-lime-400"
                    } text-lg transition-colors`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            {hasSession ? (
              <>
                <NavLink
                  to="/customer/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl border border-zinc-700 py-2 text-center text-white"
                >
                  Dashboard
                </NavLink>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-xl border border-zinc-700 py-2 text-center text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/auth/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl border border-zinc-700 py-2 text-center text-white"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/auth/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl bg-lime-400 py-2 text-center font-medium text-black"
                >
                  Join Now
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
