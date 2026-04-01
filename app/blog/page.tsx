import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Blog | Next.js, SaaS, and Web Development Insights',
  description: 'Read expert articles on Next.js performance optimization, scalable SaaS architecture, and web development trends in 2026.'
};

export default function BlogPage() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold">Blog</h1>
      <div className="mt-8 grid gap-6">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="mt-3 text-slate-300">{post.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
