'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'Programs', href: '#programs' },
    { name: 'Testimonies', href: '#testimonies' },
    { name: 'About', href: '#about' },
    { name: 'Churches', href: '#branches' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl bg-[#3f318e] rounded-full px-8 py-4 flex items-center justify-between z-50 shadow-none">
      
      {/* Logo */}
      <div className="flex flex-col text-white">
        <div className="font-extrabold text-lg sm:text-2xl select-none leading-tight">
          Royalties <span className="text-xs uppercase font-semibold block -mt-1">Youth Church</span>
        </div>
        <div className="text-[9px] uppercase mt-1 font-semibold tracking-widest leading-none">
          THE GLORIOUS CHURCH
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 items-center text-white font-medium text-sm sm:text-base">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="hover:underline transition"
            >
              {item.name}
            </Link>
          </li>
        ))}

        {/* Give button */}
        <li>
          <button className="bg-white text-[#3f318e] font-semibold rounded-full px-5 py-2 hover:bg-gray-100 transition">
            Give
          </button>
        </li>
      </ul>

      {/* Hamburger - Small screens (optional if needed) */}
      <div className="md:hidden text-white">
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Dropdown - Small screens */}
      {open && (
        <ul className="absolute top-full left-0 w-full bg-[#3f318e] rounded-b-xl flex flex-col items-center space-y-4 py-6 md:hidden z-40">
          {navItems.map((item) => (
            <li key={item.name} className="w-4/5">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-white text-center rounded-lg py-2 hover:underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="w-4/5">
            <button
              onClick={() => setOpen(false)}
              className="w-full bg-white text-[#3f318e] font-semibold rounded-full py-2 hover:bg-gray-100 transition"
            >
              Give
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}