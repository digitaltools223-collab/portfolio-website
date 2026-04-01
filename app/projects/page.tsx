import { Metadata } from 'next';
import { projects } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Projects | Case Studies by Full Stack Developer Pakistan',
  description: 'Explore client-focused case studies covering SaaS, APIs, POS/ERP systems, and high-conversion platforms.'
};

export default function ProjectsPage() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold">Project Case Studies</h1>
      <div className="mt-10 grid gap-6">
        {projects.map((project) => (
          <article key={project.title} className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="mt-4"><strong>Problem:</strong> {project.problem}</p>
            <p className="mt-2"><strong>Solution:</strong> {project.solution}</p>
            <p className="mt-2"><strong>Tech Stack:</strong> {project.stack.join(', ')}</p>
            <p className="mt-2"><strong>Results:</strong> {project.result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
