import { Metadata } from 'next';
import { site } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'About | Next.js Developer & Software Architect',
  description: 'Learn about Muhammad Danish Raza: Full Stack Developer Pakistan focused on performance, scalability, and secure engineering.'
};

export default function AboutPage() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold">About {site.name}</h1>
      <p className="mt-6 text-slate-300">I am a full-stack developer and software architect helping businesses turn ideas into high-performing digital products. My journey started with solving local operational problems, then evolved into building production-grade web systems for global clients who care about speed, reliability, and growth.</p>
      <h2 className="mt-10 text-2xl font-semibold">Skills & Expertise</h2>
      <p className="mt-4 text-slate-300">I specialize in Next.js 14, Tailwind CSS, API architecture, authentication systems, and secure application delivery. I focus on clean component architecture, observability, and maintainable codebases that teams can scale confidently.</p>
      <h2 className="mt-10 text-2xl font-semibold">Tech Stack</h2>
      <p className="mt-4 text-slate-300">Next.js, React, TypeScript, Tailwind CSS, Node.js, REST APIs, PostgreSQL/MySQL, caching layers, CI/CD, and secure-by-design development patterns.</p>
      <h2 className="mt-10 text-2xl font-semibold">Work Philosophy</h2>
      <p className="mt-4 text-slate-300">Every project should be fast, scalable, and secure by default. I combine UX empathy with engineering discipline to build products that users love and businesses can trust.</p>
    </section>
  );
}
