'use client';
import branches from '@/data/branches.json';
import { FaInstagram } from 'react-icons/fa';

export default function Branches() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-center text-3xl font-bold text-primaryPurple">
        OUR OTHER BRANCHES
      </h2>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {branches.map((branch) => (
          <div
            key={branch.id}
            className="bg-white shadow-lg rounded-2xl p-6 text-center flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold">{branch.name}</h3>
            <p className="mt-3 text-gray-600">{branch.blurb}</p>
            
            {branch.socials?.instagram && (
              <a
                href={branch.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-primaryPurple hover:text-lightPurple transition-colors"
              >
                <FaInstagram size={28} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
