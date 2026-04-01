import Link from 'next/link';
import { FadeIn, TiltCard } from '@/components/motion-wrapper';
import TypingText from '@/components/typing-text';
import { projects, services, site } from '@/lib/site-data';

export default function HomePage() {
  return (
    <>
      <section className="relative py-24">
        <FadeIn>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-slate-400">Premium Full-Stack Engineering</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            I build <span className="gradient-text">high-converting digital products</span> for ambitious global brands.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            {site.name}, {site.role}. I help founders and teams launch faster with elite UX, scalable architecture, and secure-by-design engineering.
            Currently focused on <TypingText words={["Next.js platforms", "SaaS systems", "API-driven products"]} />
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-medium shadow-glow">Hire Me</Link>
            <Link href="/projects" className="rounded-full border border-white/20 px-6 py-3">Start Project</Link>
          </div>
        </FadeIn>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {services.slice(0, 3).map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.1}>
            <div className="glass rounded-2xl p-6"><h2 className="text-xl font-semibold">{s.title}</h2><p className="mt-3 text-slate-300">{s.solution}</p></div>
          </FadeIn>
        ))}
      </section>

      <section className="py-20">
        <h2 className="text-3xl font-semibold">Featured Projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 2).map((p) => (
            <TiltCard key={p.title}><article className="glass rounded-2xl p-6"><h3 className="text-xl font-semibold">{p.title}</h3><p className="mt-2 text-slate-300">{p.result}</p></article></TiltCard>
          ))}
        </div>
      </section>

      <section className="glass mb-16 rounded-2xl p-8">
        <h2 className="text-3xl font-semibold">Why Choose Me</h2>
        <p className="mt-4 text-slate-300">You get senior-level ownership, direct communication, and systems thinking that balances speed, scalability, and business outcomes. I do not just ship code—I deliver revenue-focused digital assets.</p>
        <Link href="/contact" className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-black">Book a Strategy Call</Link>
      </section>
    </>
  );
}
