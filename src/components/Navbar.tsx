"use client";

import { motion } from "framer-motion";
import { use, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-primaryPurple rounded-full max-w-[1100px] mx-auto flex justify-between items-center py-3 px-8 mt-6"
    >
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src="/logo.svg" alt="RYC Logo" className="w-10 h-10" />
        <div className="text-white font-bold">
          <p className="text-xl font-extrabold">Royalties</p>
          <p className="text-xs uppercase">The Glorious Church</p>
        </div>
      </div>

      {/* Desktop / Medium screen nav links */}
      <ul className="hidden md:flex space-x-8 items-center text-white font-semibold text-lg">
        {["Programs", "Testimonies", "About", "Churches"].map((item) => (
          <li key={item} className="hover:text-yellow-400 cursor-pointer">
            {item}
          </li>
        ))}
        <li>
          <button className="bg-white text-primaryPurple px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition">
            Give
          </button>
        </li>
      </ul>

      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="block md:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        {/* Simple Hamburger Icon */}
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    </motion.nav>
  );
}