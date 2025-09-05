// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, surname, email, message } = req.body;

  if (!name || !surname || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    // ✅ secure transport (use env vars!)
    const transporter = nodemailer.createTransport({
      service: "gmail", // or "smtp.mailgun.org", "Outlook365" etc.
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password (not real pw)
      },
    });

    await transporter.sendMail({
      from: `"RYC Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER, // where you want to receive messages
      subject: `New Contact Form Message from ${name} ${surname}`,
      text: `
        Name: ${name} ${surname}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <p><strong>Name:</strong> ${name} ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email send failed:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
