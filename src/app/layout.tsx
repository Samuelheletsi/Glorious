import '@/styles/globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Royalties Youth Church',
  description: 'Official site of Christ Embassy – Royalties Youth Church',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-darkBg text-highlightYellow font-sans min-h-screen">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
