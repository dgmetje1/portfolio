// src/i18n/config.ts
import i18next, { type i18n } from 'i18next';
import translations from './translations.json';

export const locales = ['en', 'ca', 'es', 'fr'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'en';

export const isLang = (value: unknown): value is Lang => locales.includes(value as Lang);

// Pages that exist for every locale, mapped to their path inside /[lang]/
export const pages = {
	home: '',
	projects: 'projects/'
} as const;
export type Page = keyof typeof pages;

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Base-aware URL of a page in the given language, e.g. /portfolio/es/projects/ */
export const getLocalizedPath = (lang: Lang, page: Page = 'home') => `${base}/${lang}/${pages[page]}`;

/** Base-aware URL of a static asset or non-localized route */
export const withBase = (path: string) => `${base}/${path.replace(/^\//, '')}`;

const resources = {
	en: { translation: translations.en },
	ca: { translation: translations.ca },
	es: { translation: translations.es },
	fr: { translation: translations.fr }
};

export function createI18n(lang: Lang): i18n {
	const instance = i18next.createInstance();
	instance.init({
		resources,
		lng: lang,
		fallbackLng: defaultLang,
		interpolation: { escapeValue: false },
		initAsync: false
	});
	return instance;
}
