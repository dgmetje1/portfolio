import { useI18n } from '@/i18n/useI18n';

export default () => {
	const { t } = useI18n();

	return (
		<section id="about" aria-labelledby="about-title" className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 id="about-title" className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
					{t('aboutSectionTitle')}
				</h2>

				<div className="grid md:grid-cols-2 gap-8" role="list" aria-label={t('aboutListLabel')}>
					{/* Developer Journey & Philosophy */}
					<article
						role="listitem"
						className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20"
					>
						<h3 className="text-2xl font-bold mb-4 text-blue-400">{t('aboutSectionJourney')}</h3>
						<p className="text-gray-300 leading-relaxed mb-4">{t('aboutJourneyText1')}</p>
						<p className="text-gray-300 leading-relaxed mb-4">{t('aboutJourneyText2')}</p>
						<p className="text-gray-300 leading-relaxed mb-4">{t('aboutJourneyText3')}</p>
						<p className="text-gray-300 leading-relaxed mb-4">{t('aboutJourneyText4')}</p>
						<p className="text-gray-300 leading-relaxed mb-4">{t('aboutJourneyText5')}</p>
					</article>

					{/* Developer Capabilities */}
					<article
						role="listitem"
						className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20"
					>
						<h3 className="text-2xl font-bold mb-4 text-blue-400">{t('aboutCapabilitiesTitle')}</h3>
						<ul className="space-y-2 text-gray-300 list-disc list-inside" role="list" aria-label={t('capabilitiesLabel')}>
							<li>{t('aboutCapability1')}</li>
							<li>{t('aboutCapability2')}</li>
							<li>{t('aboutCapability3')}</li>
							<li>{t('aboutCapability4')}</li>
							<li>{t('aboutCapability5')}</li>
						</ul>
					</article>
				</div>
			</div>
		</section>
	);
};
