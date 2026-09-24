import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/i18n/LanguageContext';
import { isLang, type Lang } from '@/i18n/config';

const LANGUAGES: { code: Lang; label: string }[] = [
	{ code: 'en', label: 'English' },
	{ code: 'ca', label: 'Català' },
	{ code: 'es', label: 'Español' },
	{ code: 'fr', label: 'Français' }
];

export default ({ id = 'language-select' }: { id?: string }) => {
	const { language, setLanguage } = useLanguage();
	const { t } = useTranslation();

	return (
		<>
			<label htmlFor={id} className="sr-only">
				{t('selectLanguage')}
			</label>
			<select
				id={id}
				value={language}
				onChange={e => isLang(e.target.value) && setLanguage(e.target.value)}
				aria-label={t('selectLanguage')}
				className="bg-slate-800/80 text-gray-300 text-sm rounded-md border border-slate-600 px-2 py-1.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors cursor-pointer"
			>
				{LANGUAGES.map(({ code, label }) => (
					<option key={code} value={code} lang={code}>
						{label}
					</option>
				))}
			</select>
		</>
	);
};
