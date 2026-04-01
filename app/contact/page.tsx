import { Metadata } from 'next';
import { site } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Contact | Start Your Project Today',
  description: 'Hire a Next.js Developer to build premium web products. Contact Muhammad Danish Raza via form, email, or WhatsApp.'
};

export default function ContactPage() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold">Let’s Build Something Exceptional</h1>
      <p className="mt-4 text-slate-300">Ready to launch or scale? Share your goals and I will respond with a clear action plan.</p>
      <form className="glass mt-10 grid gap-4 rounded-2xl p-6 md:max-w-2xl">
        <label className="grid gap-2">Name<input className="rounded-lg bg-black/60 p-3" name="name" required /></label>
        <label className="grid gap-2">Email<input type="email" className="rounded-lg bg-black/60 p-3" name="email" required /></label>
        <label className="grid gap-2">Message<textarea className="min-h-32 rounded-lg bg-black/60 p-3" name="message" required /></label>
        <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 font-medium">Send Message</button>
      </form>
      <div className="mt-8 space-y-2">
        <p>Email: <a href={`mailto:${site.email}`} className="text-cyan-300">{site.email}</a></p>
        <a href={`https://wa.me/${site.whatsapp}`} className="inline-block rounded-full border border-green-400 px-5 py-2 text-green-300">Chat on WhatsApp</a>
      </div>
    </section>
  );
}
