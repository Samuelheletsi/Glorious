'use client';
import branches from '@/data/branches.json';
import { FaInstagram } from 'react-icons/fa';

export default function Branches() {
  return (
    <section className="px-6 py-20 bg-white max-w-7xl mx-auto z-70" id='churches'>
      <h2 className="text-3xl font-extrabold text-center mb-12 uppercase">Our Other Branches</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {branches.map((b, idx) => (
          <div
            key={b.id}
            className={`border-t md:border-t-0 md:border-l md:first:border-l-0 border-gray-300 pt-6 md:pt-0 md:px-6 flex flex-col gap-3`}
          >
            <h3 className="font-extrabold text-black uppercase">{b.name}</h3>
            <p className="text-gray-700">{b.blurb}</p>
            <a href={b.socials?.instagram ?? '#'} aria-label={`${b.name} Instagram`} className="text-purple-700 hover:text-purple-900 text-lg mt-auto">
              <FaInstagram />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}