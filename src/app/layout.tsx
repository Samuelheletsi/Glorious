 import '@/styles/globals.css'; // Make sure this path is correct
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Royalties Youth Church',
  description: 'Official site of Christ Embassy – Royalties Youth Church',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* Use Tailwind classes matching your colors in tailwind.config.js */}
      <body className="bg-navy text-gold font-sans min-h-screen">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

