import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import CursorGlow from '@/components/cursor-glow';

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.example.com'),
  title: 'Muhammad Danish Raza | Full Stack Developer Pakistan',
  description: 'Full Stack Developer Pakistan specializing in Next.js, scalable SaaS, APIs, and conversion-focused web products.',
  keywords: ['Full Stack Developer Pakistan', 'Next.js Developer', 'Hire Web Developer']
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CursorGlow />
        <Navbar />
        <main className="mx-auto max-w-6xl px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
