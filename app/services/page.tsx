import { Metadata } from 'next';
import { services } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Services | Hire Web Developer for High-Growth Products',
  description: 'Conversion-focused web development, SaaS applications, APIs, optimization, and custom systems by a senior Next.js developer.'
};

export default function ServicesPage() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold">Services</h1>
      <p className="mt-4 text-slate-300">If you want premium execution with measurable outcomes, these are the services I offer.</p>
      <div className="mt-10 grid gap-6">
        {services.map((service) => (
          <article key={service.title} className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-semibold">{service.title}</h2>
            <h3 className="mt-4 font-semibold text-blue-300">Problem</h3><p className="text-slate-300">{service.problem}</p>
            <h3 className="mt-4 font-semibold text-purple-300">Solution</h3><p className="text-slate-300">{service.solution}</p>
            <h3 className="mt-4 font-semibold text-cyan-300">Result</h3><p className="text-slate-300">{service.result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
