import { useLanguage } from '@/i18n/LanguageContext';
import { useI18n } from '@/i18n/useI18n';

const LANGUAGES = [
	{ code: 'en' as const, label: 'English' },
	{ code: 'ca' as const, label: 'Català' },
	{ code: 'es' as const, label: 'Español' },
	{ code: 'fr' as const, label: 'Français' }
];

export default () => {
	const { language, switchLanguage } = useLanguage();
	const { t } = useI18n();

	return (
		<>
			<label htmlFor="language-select" className="sr-only">
				{t('selectLanguage')}
			</label>
			<select
				id="language-select"
				value={language}
				onChange={e => switchLanguage(e.target.value as 'en' | 'ca' | 'es' | 'fr')}
				aria-label={t('selectLanguage')}
				className="bg-slate-800/80 text-gray-300 text-sm rounded-md border border-slate-600 px-2 py-1.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors cursor-pointer"
			>
				{LANGUAGES.map(({ code, label }) => (
					<option key={code} value={code}>
						{label}
					</option>
				))}
			</select>
		</>
	);
};
