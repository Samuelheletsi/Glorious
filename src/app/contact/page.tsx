'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent!'); // Replace with actual API or email handler
  };

  return (
    <div className="max-w-3xl mx-auto p-4 mt-24">
      <h2 className="text-3xl font-bold text-[#f5d46b] mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300"
          rows={6}
          required
        />
        <button type="submit" className="bg-[#f5d46b] text-[#0b1a33] px-6 py-3 rounded font-semibold">
          Send Message
        </button>
      </form>
      <div className="mt-6">
        <iframe
          className="w-full h-64 md:h-96 rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.0!2d-74.006!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
          loading="lazy"
        />
      </div>
    </div>
  );
}
