'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
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
    setFormData({ name: '', surname: '', email: '', message: '' });
  };

  const baseInputStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    borderRadius: '0.5rem',
    padding: '0.75rem',
    marginTop: '0.5rem',
    outline: 'none',
    width: '100%',
    transition: 'all 0.2s ease',
    boxSizing: 'border-box', // ✅ avoids overflow
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{
        width: '100%',
        backgroundColor: '#3b3395',
        overflowX: 'hidden', // ✅ prevents horizontal scrolling
      }}
    >
      <div
        style={{
          maxWidth: '1100px', // ✅ matches other sections
          margin: '0 auto',
          padding: '4rem 0.2rem',
          width: '100%',
        }}
      >
        {/* Heading */}
        <h1
          style={{
            fontSize: '2.25rem',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '1.5rem',
            textAlign: 'center',
          }}
        >
          Get in Touch
        </h1>
        <p
          style={{
            textAlign: 'center',
            color: '#ffffff',
            marginBottom: '3rem',
            fontSize: '1rem',
          }}
        >
          We&apos;d love to hear from you! Fill out the form below or reach us via email or phone.
        </p>

        {/* Form wrapper */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              backgroundColor: '#3b3395',
              borderRadius: '1rem',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              width: '100%', // ✅ responsive
              maxWidth: '600px', // ✅ constrain form width
              boxShadow: '0 12px 17px rgba(0,0,0,0.1)',
            }}
          >
            {submitted && (
              <p style={{ color: '#16A34A', fontWeight: 600, marginBottom: '1rem' }}>
                Thank you! Your message has been sent.
              </p>
            )}

            {/* Name + Surname */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '1rem',
                flexWrap: 'wrap', // ✅ allows stacking on small screens
              }}
            >
              <label
                style={{ flex: 1, display: 'flex', flexDirection: 'column', fontWeight: 500, color: '#fff' }}
              >
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={baseInputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#3b3395')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#ccc')}
                  placeholder="First Name"
                />
              </label>
              <label
                style={{ flex: 1, display: 'flex', flexDirection: 'column', fontWeight: 500, color: '#fff' }}
              >
                Surname
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                  style={baseInputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#3b3395')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#ccc')}
                  placeholder="Surname"
                />
              </label>
            </div>

            {/* Email */}
            <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 500, color: '#fff' }}>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={baseInputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#3b3395')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#ccc')}
              />
            </label>

            {/* Message */}
            <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 500, color: '#fff' }}>
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                style={baseInputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#3b3395')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#ccc')}
              />
            </label>

            {/* Submit Button */}
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
                border: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FBBF24';
                e.currentTarget.style.color = 'green';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#3b3395';
                e.currentTarget.style.color = '#fff';
              }}
            >
              Submit
            </button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}
