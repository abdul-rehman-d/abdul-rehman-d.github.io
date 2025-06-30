// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: process.env.VERCEL === "1" ? (
    process.env.VERCEL_ENV === "production" ?
      `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` :
      `https://${process.env.VERCEL_BRANCH_URL}`
  ) : (
    process.env.NODE_ENV === "production" ?
      "https://abdul-rehman-d.com" :
      "http://localhost:4321"
  ),
});