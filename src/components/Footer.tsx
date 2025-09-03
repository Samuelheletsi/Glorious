'use client';
import footerData from '@/data/footer.json';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white px-6 py-16 rounded-t-3xl z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <h2 className="hidden md:block text-4xl font-extrabold opacity-20 tracking-wider select-none">
          THE GLORIOUS <br /> CHURCH
        </h2>
        <div className="flex flex-col md:flex-row justify-between flex-1 gap-6 text-sm">
          <div>
            <h3 className="font-bold mb-2 uppercase">Our Location</h3>
            <a href="#" className="underline hover:text-purple-300">
              Jewima Hotel, Spintex
            </a>
          </div>
          <div>
            <h3 className="font-bold mb-2 uppercase">Get in Touch</h3>
            <p>{footerData.email}</p>
          </div>
          <div>
            <h3 className="font-bold mb-2 uppercase">Follow Us</h3>
            <div className="flex space-x-4 text-xl">
              <a href={footerData.social.instagram} aria-label="Instagram" className="hover:text-purple-300"><FaInstagram /></a>
              <a href={footerData.social.twitter} aria-label="Twitter" className="hover:text-purple-300"><FaTwitter /></a>
              <a href={footerData.social.youtube} aria-label="YouTube" className="hover:text-purple-300"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400 text-xs mt-12">{footerData.copyright}</p>
    </footer>
  );
}
