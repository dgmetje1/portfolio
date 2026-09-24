import { languages } from '@/data/languages';
import { useTranslation } from 'react-i18next';

export default () => {
	const { t } = useTranslation();

	return (
		<section id="languages" aria-labelledby="languages-title" className="py-20 px-4 bg-slate-900/50">
			<div className="max-w-6xl mx-auto">
				<h2 id="languages-title" className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
					{t('languages')}
				</h2>

				<ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label={t('languagesListLabel')}>
					{languages.map((lang, index) => (
						<li
							key={index}
							role="listitem"
							className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all hover:shadow-xl hover:shadow-blue-500/10"
						>
							<h3 className="text-lg font-semibold text-gray-200 mb-2">{lang.name}</h3>
							<p className="text-blue-400 font-medium">{lang.level}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
