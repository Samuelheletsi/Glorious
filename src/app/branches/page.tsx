'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function BranchesPage() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    // Runs only in the browser
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-6xl mx-auto py-16 px-6"
    >
      <h1 className="text-4xl font-bold text-primaryPurple mb-6 text-center">
        Our Branches
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Explore our locations and get in touch with your nearest branch.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: 'Downtown Branch', address: '123 Main St, City', phone: '+1 234 567 890' },
          { name: 'Uptown Branch', address: '456 High St, City', phone: '+1 987 654 321' },
          { name: 'Suburban Branch', address: '789 Suburb Rd, City', phone: '+1 555 123 456' },
        ].map((branch) => (
          <motion.div
            key={branch.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-2"
          >
            <h2 className="text-xl font-semibold text-primaryPurple">{branch.name}</h2>
            <p className="text-gray-700">{branch.address}</p>
            <p className="text-gray-700">{branch.phone}</p>
          </motion.div>
        ))}
      </div>

      {windowWidth !== null && (
        <p className="mt-8 text-center text-gray-500 text-sm">
          Current window width: {windowWidth}px
        </p>
      )}
    </motion.section>
  );
}
