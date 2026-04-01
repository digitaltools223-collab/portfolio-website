import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { site } from '@/lib/site-data';

const links = [
  ['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Projects', '/projects'], ['Blog', '/blog'], ['Contact', '/contact']
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-wide">{site.name}</Link>
        <div className="hidden gap-6 md:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-sm text-slate-300 hover:text-white">{label}</Link>)}
        </div>
        <div className="flex items-center gap-3">
          <a href={site.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Github className="h-4 w-4" /></a>
          <a href={site.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /></a>
        </div>
      </nav>
    </header>
  );
}
