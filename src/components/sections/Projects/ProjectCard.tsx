import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/i18n/LanguageContext';
import { withBase } from '@/i18n/config';
import type { Project } from '@/data/projects';

export default ({ project }: { project: Project }) => {
	const { t } = useTranslation();
	const { language } = useLanguage();
	const videoRef = useRef<HTMLVideoElement>(null);

	// Autoplay (muted) only while the card is on screen, and never for users who prefer reduced motion
	useEffect(() => {
		const video = videoRef.current;
		if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) video.play().catch(() => {});
				else video.pause();
			},
			{ threshold: 0.5 }
		);
		observer.observe(video);
		return () => observer.disconnect();
	}, []);

	return (
		<article
			role="listitem"
			className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all hover:shadow-xl hover:shadow-blue-500/10"
		>
			<video
				ref={videoRef}
				src={withBase(project.video)}
				poster={withBase(project.poster)}
				aria-label={t('projectsVideoLabel', { name: project.name })}
				className="w-full aspect-video bg-slate-900 object-cover"
				muted
				loop
				playsInline
				controls
				preload="metadata"
			/>

			<div className="p-8">
				<h3 className="text-2xl font-bold text-blue-400 mb-3">{project.name}</h3>
				<p className="text-gray-300 mb-6 leading-relaxed">{project.description[language]}</p>

				{project.link && (
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
					>
						{t('projectsViewProject')}
						<ExternalLink size={18} aria-hidden="true" />
						<span className="sr-only">{t('opensInNewTab')}</span>
					</a>
				)}
			</div>
		</article>
	);
};
