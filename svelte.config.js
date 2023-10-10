import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    target: '#svelte',
    adapter: adapter()
  },
  preprocess: vitePreprocess()
};
export default config;