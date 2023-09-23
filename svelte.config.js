// import adapter from '@sveltejs/adapter-auto'; // Remove this line
import adapter from '@sveltejs/adapter-cloudflare'; // Add this line
import { vitePreprocess } from '@sveltejs/kit/vite';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess({
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ],
    },
  }),
  kit: {
    adapter: adapter(), 
  }
};

export default config;
