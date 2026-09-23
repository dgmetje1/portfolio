import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import i18n from '@/i18n';

type SupportedLang = 'en' | 'ca' | 'es' | 'fr';

interface LanguageContextValue {
	language: SupportedLang;
	switchLanguage: (lang: SupportedLang) => void;
}

const defaultValue: LanguageContextValue = {
	language: 'en',
	switchLanguage: () => {}
};

const LanguageContext = createContext<LanguageContextValue>(defaultValue);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
	const [language, setLanguage] = useState<SupportedLang>('en');
	const [isClient, setIsClient] = useState(false);

	const switchLanguage = (lang: SupportedLang) => {
		console.log(`Switching language to: ${lang}`);
		setLanguage(lang);
		i18n.changeLanguage(lang);
		if (typeof window !== 'undefined') {
			window.localStorage.setItem('selectedLanguage', lang);
		}
	};

	const value = useMemo(() => ({ language, switchLanguage }), [language, switchLanguage]);

	useEffect(() => {
		setIsClient(true);

		// On client, sync with localStorage and i18n
		const stored = localStorage.getItem('selectedLanguage') as SupportedLang | null;
		const supportedLangs: SupportedLang[] = ['en', 'ca', 'es', 'fr'];

		if (stored && supportedLangs.includes(stored)) {
			setLanguage(stored);
			i18n.changeLanguage(stored);
		} else {
			// Detect browser language
			const detectedLang = (navigator.language || navigator.languages[0] || 'en').split('-')[0] as SupportedLang;
			const normalizedLang = supportedLangs.includes(detectedLang) ? detectedLang : 'en';
			if (normalizedLang !== 'en') {
				setLanguage(normalizedLang);
				i18n.changeLanguage(normalizedLang);
				localStorage.setItem('selectedLanguage', normalizedLang);
			}
		}

		const handler = (lng: string) => {
			if (supportedLangs.includes(lng as SupportedLang)) {
				localStorage.setItem('selectedLanguage', lng);
				setLanguage(lng as SupportedLang);
			}
		};
		i18n.on('languageChanged', handler);
		return () => i18n.off('languageChanged', handler);
	}, []);

	return <LanguageContext value={value}>{children}</LanguageContext>;
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
