// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	site: 'https://dgmetje1.github.io',
	base: '/portfolio',
	vite: {
		plugins: [tailwindcss()],
		server: {
			host: '0.0.0.0',
			port: 4321
		}
	}
});
