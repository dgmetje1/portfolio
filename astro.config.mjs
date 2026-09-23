// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

const base = process.env.VITE_BASE_URL || '/';
const site = 'https://dgmetje.dev';

// https://astro.build/config
export default defineConfig({
	site,
	base,
	integrations: [react(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
		server: {
			host: '0.0.0.0',
			port: 4321
		},
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			}
		}
	}
});
