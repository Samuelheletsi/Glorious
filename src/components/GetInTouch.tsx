'use client';

import { motion } from "framer-motion";
import { useState } from "react";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", surname: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  const baseInputStyle: React.CSSProperties = {
    border: "1px solid #ccc",
    borderRadius: "0.5rem",
    padding: "0.75rem",
    marginTop: "0.5rem",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    transition: "all 0.2s ease",
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{ width: "100%", backgroundColor: "#3b3395", overflowX: "hidden" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 0.2rem", width: "100%" }}>
        <h1 style={{ fontSize: "2.25rem", fontWeight: 800, color: "#fff", textAlign: "center", marginBottom: "1.5rem" }}>
          Get in Touch
        </h1>
        <p style={{ textAlign: "center", color: "#fff", marginBottom: "3rem" }}>
          We'd love to hear from you! Fill out the form below.
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              backgroundColor: "#3b3395",
              borderRadius: "1rem",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "100%",
              maxWidth: "600px",
              boxShadow: "0 12px 17px rgba(0,0,0,0.1)",
            }}
          >
            {submitted && (
              <p style={{ color: "#16A34A", fontWeight: 600, marginBottom: "1rem" }}>
                Thank you! Your message has been sent.
              </p>
            )}

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          
                <label style={{ display: "block",   color: "#fff" }}>
                  Name
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required style={baseInputStyle} placeholder="First Name" />
                </label>

                <label style={{ display: "block",   color: "#fff" }}>
                  Surname
                  <input type="text" name="surname" value={formData.surname} onChange={handleChange} required style={baseInputStyle} placeholder="Surname" />
                </label>

            </div>

            <label style={{ display: "flex", flexDirection: "column", color: "#fff" }}>
              Email
              <input type="email" name="email" value={formData.email} onChange={handleChange} required style={baseInputStyle} />
            </label>

            <label style={{ display: "flex", flexDirection: "column", color: "#fff" }}>
              Message
              <textarea name="message" value={formData.message} onChange={handleChange} rows={5} required style={baseInputStyle}></textarea>
            </label>

            <button
              type="submit"
              style={{
                backgroundColor: "#FBBF24",
                color: "#3b3395",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                fontWeight: 600,
                cursor: "pointer",
                border: "none",
                transition: "all 0.3s ease",
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
