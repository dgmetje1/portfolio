// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

const base = process.env.VITE_BASE_URL || '/';
const site = 'https://dgmetje1.github.io';

// https://astro.build/config
export default defineConfig({
	site,
	base,
	integrations: [
		react(),
		// Only the localized pages; / and /projects are noindex language redirects
		sitemap({ filter: page => /\/(en|ca|es|fr)\//.test(new URL(page).pathname) })
	],
	i18n: {
		locales: ['en', 'ca', 'es', 'fr'],
		defaultLocale: 'en',
		routing: {
			prefixDefaultLocale: true, // /en/, /ca/... (simplest with static hosting)
			redirectToDefaultLocale: false // src/pages/index.astro redirects / to the visitor's language
		}
	},
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
