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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const inputStyle = {
    border: '1px solid #ccc',
    borderRadius: '0.5rem',
    padding: '0.75rem',
    marginTop: '0.5rem',
    outline: 'none',
    width: '100%',
  };

  const inputFocusStyle = {
    borderColor: '#3b3395', // primaryPurple
    boxShadow: '0 0 0 2px #3b3395',
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{ maxWidth: '80rem', margin: '0 auto', padding: '4rem 1.5rem' }}
    >
      <h1
        style={{
          fontSize: '2.25rem',
          fontWeight: 800,
          color: '#3b3395', // primaryPurple
          marginBottom: '1.5rem',
          textAlign: 'center',
        }}
      >
        Get in Touch
      </h1>
      <p style={{ textAlign: 'center', color: '#4B5563', marginBottom: '3rem' }}>
        We'd love to hear from you! Fill out the form below or reach us via email or phone.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
        }}
      >
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            backgroundColor: '#fff',
            borderRadius: '1rem',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
          }}
        >
          {submitted && (
            <p style={{ color: '#16A34A', fontWeight: 600, marginBottom: '1rem' }}>
              Thank you! Your message has been sent.
            </p>
          )}

          <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 500, color: '#374151' }}>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
              onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
            />
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 500, color: '#374151' }}>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
              onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
            />
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 500, color: '#374151' }}>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              style={inputStyle}
              onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
            />
          </label>

          <button
            type="submit"
            style={{
              backgroundColor: '#3b3395',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: 600,
              marginTop: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FBBF24'; // highlightYellow
              e.currentTarget.style.color = '#3b3395';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#3b3395';
              e.currentTarget.style.color = '#fff';
            }}
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1.5rem',
            color: '#374151',
          }}
        >
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Email</h2>
            <p>info@royaltiesyouthchurch.org</p>
          </div>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Phone</h2>
            <p>+1 234 567 890</p>
          </div>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Address</h2>
            <p>123 Glorious Street, City, Country</p>
          </div>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Follow Us</h2>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: '#3b3395', textDecoration: 'none' }}>Facebook</a>
              <a href="#" style={{ color: '#3b3395', textDecoration: 'none' }}>Instagram</a>
              <a href="#" style={{ color: '#3b3395', textDecoration: 'none' }}>YouTube</a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
