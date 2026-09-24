import { Construction, Hammer, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default () => {
	const { t } = useTranslation();

	return (
		<section id="projects" aria-labelledby="projects-title" className="min-h-screen flex items-center justify-center px-4 pt-16">
			<div className="max-w-4xl mx-auto text-center">
				<div className="mb-8" aria-hidden="true">
					<div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 p-1">
						<div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
							<Construction size={48} className="text-amber-400" />
						</div>
					</div>
				</div>

				<h1 id="projects-title" className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
					{t('projectsSectionTitle')}
				</h1>

				<p className="text-2xl md:text-3xl text-amber-300 mb-6">{t('projectsSectionSubtitle')}</p>

				<p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{t('projectsSectionDescription')}</p>

				<div className="flex flex-wrap justify-center gap-4 mb-12">
					<div className="px-6 py-3 bg-slate-800 rounded-lg font-semibold text-gray-400 cursor-not-allowed flex items-center gap-2">
						<Hammer size={20} aria-hidden="true" />
						{t('projectsComingSoon')}
					</div>
					<div className="px-6 py-3 bg-slate-800 rounded-lg font-semibold text-gray-400 cursor-not-allowed flex items-center gap-2">
						<Wrench size={20} aria-hidden="true" />
						{t('projectsInProgress')}
					</div>
				</div>

				<p className="text-blue-400 text-center mt-8">{t('projectsCheckBack')}</p>
			</div>
		</section>
	);
};