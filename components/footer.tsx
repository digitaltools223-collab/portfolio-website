import Link from 'next/link';
import { site } from '@/lib/site-data';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10 text-sm text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {site.name}. Built for premium client partnerships.</p>
        <div className="flex gap-4">
          <a href={site.github} target="_blank" rel="noreferrer">View My Work on GitHub</a>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
