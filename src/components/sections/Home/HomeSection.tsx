import { ChevronDown, Code, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { HomeSectionProps } from './types';

export default ({ scrollToSection }: HomeSectionProps) => {
	const { t } = useTranslation();

	return (
		<section id="home" aria-labelledby="home-title" className="min-h-screen flex items-center justify-center px-4 pt-16">
			<div className="max-w-4xl mx-auto text-center">
				<div className="mb-8" aria-hidden="true">
					<div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 p-1">
						<div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
							<Code size={48} className="text-blue-400" />
						</div>
					</div>
				</div>

				<h1 id="home-title" className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
					{t('homeSectionTitle')}
				</h1>

				<p className="text-2xl md:text-3xl text-blue-300 mb-6">{t('homeSectionSubtitle')}</p>

				<p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{t('homeSectionDescription')}</p>

				<div className="flex flex-wrap justify-center gap-4 mb-12">
					<a
						href="https://github.com/dgmetje1"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
					>
						<Code size={20} aria-hidden="true" />
						{t('homeGitHub')}
					</a>
					<a
						href="https://www.linkedin.com/in/dani-garcia-metje/"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-3 bg-slate-800 rounded-lg font-semibold hover:bg-slate-700 hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
					>
						<Linkedin size={20} aria-hidden="true" />
						{t('homeLinkedIn')}
					</a>
				</div>

				<button
					type="button"
					aria-label={t('scrollDown')}
					onClick={() => scrollToSection('about')}
					className="animate-bounce text-blue-400 hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-full p-2"
				>
					<ChevronDown size={32} aria-hidden="true" />
				</button>
			</div>
		</section>
	);
};
