'use client';
import footerData from '@/data/footer.json';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primaryPurple text-white py-12 px-6 text-center font-semibold">
      {/* Big faded title */}
      <h1 className="text-4xl md:text-6xl font-extrabold opacity-20 mb-8">
        THE GLORIOUS CHURCH
      </h1>

      {/* Info sections */}
      <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-20 text-sm font-normal">
        {/* Location */}
        <div>
          <p className="font-bold uppercase tracking-wide">OUR LOCATION</p>
          <a
            href={footerData.location.url}
            className="text-highlightYellow underline mt-1 block"
          >
            {footerData.location.address}
          </a>
        </div>

        {/* Contact */}
        <div>
          <p className="font-bold uppercase tracking-wide">GET IN TOUCH</p>
          <p className="mt-1">{footerData.contact.email}</p>
        </div>

        {/* Socials */}
        <div>
          <p className="font-bold uppercase tracking-wide">FOLLOW US</p>
          <div className="flex gap-6 justify-center mt-2 text-lg">
            {footerData.socials.instagram && (
              <a
                href={footerData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-highlightYellow transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            )}
            {footerData.socials.twitter && (
              <a
                href={footerData.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-highlightYellow transition-colors"
              >
                <FaTwitter size={20} />
              </a>
            )}
            {footerData.socials.youtube && (
              <a
                href={footerData.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-highlightYellow transition-colors"
              >
                <FaYoutube size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-10 text-xs text-gray-300">
        © 2025 Christ Embassy Royalties Youth. All Rights Reserved.
      </p>
    </footer>
  );
}
