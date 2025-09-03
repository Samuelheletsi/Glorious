'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-purple-900 text-white rounded-2xl px-6 py-4 flex items-center justify-between fixed w-full z-50 shadow-md">
      <div className="text-xl font-bold">Royalties Youth</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 items-center">
        <li><Link href="#programs" className="hover:text-yellow-400">Programs</Link></li>
        <li><Link href="#testimonies" className="hover:text-yellow-400">Testimonies</Link></li>
        <li><Link href="#about" className="hover:text-yellow-400">About</Link></li>
        <li><Link href="#branches" className="hover:text-yellow-400">Churches</Link></li>
      </ul>

      {/* Give Button */}
      <button className="ml-4 bg-yellow-400 text-purple-900 px-4 py-2 rounded hover:bg-yellow-300">Give</button>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <ul className="absolute top-full left-0 w-full bg-purple-900 flex flex-col items-center space-y-4 py-4 md:hidden">
          <li><Link href="#programs" onClick={() => setOpen(false)}>Programs</Link></li>
          <li><Link href="#testimonies" onClick={() => setOpen(false)}>Testimonies</Link></li>
          <li><Link href="#about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link href="#branches" onClick={() => setOpen(false)}>Churches</Link></li>
        </ul>
      )}
    </nav>
  );
}
