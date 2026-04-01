import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#3b82f6',
          purple: '#8b5cf6'
        }
      },
      boxShadow: {
        glow: '0 0 30px rgba(59,130,246,0.35)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(110deg, #60a5fa, #8b5cf6, #22d3ee)'
      }
    }
  },
  plugins: []
} satisfies Config;
