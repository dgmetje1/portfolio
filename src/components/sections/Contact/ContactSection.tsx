import { Linkedin } from 'lucide-react';
import { useI18n } from '@/i18n/useI18n';

export default () => {
	const { t } = useI18n();

	return (
		<section id="contact" aria-labelledby="contact-title" className="py-20 px-4">
			<div className="max-w-4xl mx-auto text-center">
				<h2 id="contact-title" className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
					{t('contactSectionTitle')}
				</h2>

				<p className="text-xl text-gray-300 mb-12">{t('contactSectionDescription')}</p>

				<ul className="flex flex-wrap justify-center gap-6" role="list" aria-label={t('contactMethodsLabel')}>
					<li role="listitem">
						<a
							href="https://www.linkedin.com/in/dani-garcia-metje/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-3 px-8 py-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
						>
							<Linkedin size={24} className="text-blue-400" aria-hidden="true" />
							<div className="text-left">
								<p className="text-sm text-gray-400">{t('contactLinkedIn')}</p>
								<p className="text-gray-200">{t('contactUsername')}</p>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};
