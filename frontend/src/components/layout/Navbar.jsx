import React from "react";
import { NavLink, Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 py-3">
      <div>
        <Link to="/">Brand</Link>
      </div>

      <ul className="flex gap-x-4">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/membership">Membership</NavLink>
        </li>
        <li>
          <NavLink to="/schedule">Schedule</NavLink>
        </li>
      </ul>

      <div className="flex gap-x-4">
        <NavLink>Login</NavLink>
        <NavLink>Register</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
