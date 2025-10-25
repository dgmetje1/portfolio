// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

const base = process.env.VITE_BASE_URL || '/';
// https://astro.build/config
export default defineConfig({
	base,
	integrations: [react()],
	vite: {
		plugins: [tailwindcss()],
		server: {
			host: '0.0.0.0',
			port: 4321
		}
	}
});
