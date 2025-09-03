'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send form data to your API here
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000); // auto-hide message
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-6xl mx-auto py-16 px-6 md:px-12"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-primaryPurple mb-6 text-center">
        Get in Touch
      </h1>
      <p className="text-center text-gray-600 mb-12 text-lg md:text-xl">
        We&apos;d love to hear from you! Fill out the form below or reach us via
        email or phone.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-lg rounded-2xl p-8 flex flex-col gap-4"
        >
          {submitted && (
            <p className="text-green-600 font-semibold mb-4 text-center">
              Thank you! Your message has been sent.
            </p>
          )}
          <label className="flex flex-col text-gray-700 font-medium">
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="border rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-primaryPurple"
            />
          </label>
          <label className="flex flex-col text-gray-700 font-medium">
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="border rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-primaryPurple"
            />
          </label>
          <label className="flex flex-col text-gray-700 font-medium">
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Your message"
              className="border rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-primaryPurple"
            />
          </label>
          <button
            type="submit"
            className="bg-primaryPurple text-white py-3 px-6 rounded-lg mt-4 hover:bg-highlightYellow hover:text-primaryPurple transition-colors duration-300"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center gap-6 text-gray-700"
        >
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Email</h2>
            <p>info@royaltiesyouthchurch.org</p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Phone</h2>
            <p>+1 234 567 890</p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Address</h2>
            <p>123 Glorious Street, City, Country</p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-primaryPurple transition-colors duration-300"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-primaryPurple transition-colors duration-300"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="#"
                className="hover:text-primaryPurple transition-colors duration-300"
                aria-label="YouTube"
              >
                YouTube
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
