// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainHeader from './components/MainHeader'; // or '@/components/MainHeader' if you use the @ alias

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Foto Goats',
  description: 'Aesthetic visuals and strategy for players and creatives.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {/* shared nav on ALL pages */}
        <MainHeader />
        {/* page content (each page handles its own top padding if needed) */}
        {children}
      </body>
    </html>
  );
}
