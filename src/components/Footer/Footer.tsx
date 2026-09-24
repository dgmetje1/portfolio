import { useTranslation } from 'react-i18next';

export default () => {
	const { t } = useTranslation();

	return (
		<footer role="contentinfo" className="bg-slate-900/80 backdrop-blur-sm py-8 px-4 border-t border-blue-500/20">
			<div className="max-w-6xl mx-auto text-center">
				<p className="text-gray-400">© {t('footerCopyright', { year: new Date().getFullYear() })}</p>
			</div>
		</footer>
	);
};
