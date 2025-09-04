import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Royalties Youth Church',
  description: 'Official site of Christ Embassy – Royalties Youth Church',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: '#fffff', 
          color: '#FBBF24', // highlightYellow
          fontFamily: 'Poppins, sans-serif',
          minHeight: '100vh',
          margin: 0,
        }}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
