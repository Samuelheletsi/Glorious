'use client';
import { motion } from 'framer-motion';

type PastorProps = {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

export default function PastorSection({ data }: { data: PastorProps }) {
  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 py-16 px-8">
      <motion.img
        src={data.image}
        alt="Pastor"
        className="rounded-[3rem] border-4 border-primaryPurple w-full md:w-1/2 object-cover"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      />
      <motion.div
        className="md:w-1/2"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
        <p className="text-gray-600 mb-6">{data.description}</p>
        <a
          href={data.buttonLink}
          className="bg-primaryPurple hover:bg-yellow-400 text-white py-2 px-6 rounded-lg transition"
        >
          {data.buttonText}
        </a>
      </motion.div>
    </section>
  );
}
