import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { createI18n, getLocalizedPath, type Lang, type Page } from './config';

type LanguageContextValue = {
	language: Lang;
	page: Page;
	setLanguage: (next: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ lang, page, children }: { lang: Lang; page: Page; children: ReactNode }) {
	const i18n = useMemo(() => createI18n(lang), [lang]);

	const value = useMemo<LanguageContextValue>(
		() => ({
			language: lang,
			page,
			setLanguage: next => {
				if (next === lang) return;
				try {
					localStorage.setItem('lang', next);
				} catch {}
				// Stay on the same page (and section) in the new language
				window.location.assign(getLocalizedPath(next, page) + window.location.hash);
			}
		}),
		[lang, page]
	);

	return (
		<LanguageContext.Provider value={value}>
			<I18nextProvider i18n={i18n}>{children}</I18nextProvider>
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const ctx = useContext(LanguageContext);
	if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
	return ctx;
}
