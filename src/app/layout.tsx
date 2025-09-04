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
          backgroundColor: '#ffffff', // fixed white
          color: '#1a1a1a', // dark gray text
          fontFamily: 'Poppins, sans-serif',
          minHeight: '100vh',
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
      </body>
    </html>
  );
}
