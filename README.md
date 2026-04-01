# Premium Next.js Portfolio Website

Modern high-converting portfolio for **Muhammad Danish Raza** built with **Next.js 14 App Router**, **Tailwind CSS**, and **Framer Motion**.

## Folder Structure

- `app/` - Route-based pages and SEO metadata.
- `components/` - Reusable UI components and motion effects.
- `lib/site-data.ts` - Personal profile, services, projects, and blog content.
- `app/blog/*` - SEO blog posts.

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run in development:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   npm start
   ```

## Deployment Guide (Vercel)

1. Push the repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework preset: **Next.js** (auto-detected).
4. Add custom domain (optional) and set env vars if needed.
5. Click **Deploy**.

Vercel will run `next build` and host the portfolio globally with CDN and edge optimizations.
