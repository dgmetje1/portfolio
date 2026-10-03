import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, GalleryHorizontal, LayoutList } from 'lucide-react';
import { projects } from '@/data/projects';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';

type View = 'list' | 'carousel';

const VIEW_STORAGE_KEY = 'projectsView';

export default () => {
	const { t } = useTranslation();
	const [view, setView] = useState<View>('carousel');
	const [activeIndex, setActiveIndex] = useState(0);
	const trackRef = useRef<HTMLDivElement>(null);

	// Restore the visitor's last choice after mount so the server-rendered markup still matches
	useEffect(() => {
		try {
			const saved = localStorage.getItem(VIEW_STORAGE_KEY);
			if (saved === 'list' || saved === 'carousel') setView(saved);
		} catch {}
	}, []);

	const changeView = (next: View) => {
		setView(next);
		setActiveIndex(0);
		try {
			localStorage.setItem(VIEW_STORAGE_KEY, next);
		} catch {}
	};

	const goTo = (index: number) => {
		const track = trackRef.current;
		if (!track) return;
		const clamped = Math.max(0, Math.min(projects.length - 1, index));
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		track.scrollTo({ left: clamped * track.clientWidth, behavior: reduceMotion ? 'auto' : 'smooth' });
	};

	// Keep the dots and buttons in sync with swipes, scroll-wheel and focus-driven scrolling
	const handleScroll = () => {
		const track = trackRef.current;
		if (track) setActiveIndex(Math.round(track.scrollLeft / track.clientWidth));
	};

	const viewButtonClass = (active: boolean) =>
		`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
			active ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white' : 'text-blue-300 hover:text-white'
		}`;

	const arrowButtonClass =
		'p-3 rounded-full bg-slate-800/70 border border-blue-500/30 text-blue-300 hover:text-white hover:border-blue-500/60 disabled:opacity-30 disabled:cursor-not-allowed transition-all focus:outline-none focus:ring-2 focus:ring-blue-500';

	return (
		<section id="projects" aria-labelledby="projects-title" className="min-h-screen px-4 pt-24 pb-20">
			<div className="max-w-4xl mx-auto">
				<header className="text-center mb-6">
					<h1
						id="projects-title"
						className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent"
					>
						{t('projectsSectionTitle')}
					</h1>
					<p className="text-lg md:text-xl text-amber-300 mb-3">{t('projectsSectionSubtitle')}</p>
					<p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">{t('projectsSectionDescription')}</p>
				</header>

				<div className="flex justify-center mb-4">
					<div
						role="group"
						aria-label={t('projectsViewToggleLabel')}
						className="inline-flex gap-1 p-1 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20"
					>
						<button
							type="button"
							aria-pressed={view === 'carousel'}
							onClick={() => changeView('carousel')}
							className={viewButtonClass(view === 'carousel')}
						>
							<GalleryHorizontal size={18} aria-hidden="true" />
							{t('projectsViewCarousel')}
						</button>
						<button
							type="button"
							aria-pressed={view === 'list'}
							onClick={() => changeView('list')}
							className={viewButtonClass(view === 'list')}
						>
							<LayoutList size={18} aria-hidden="true" />
							{t('projectsViewList')}
						</button>
					</div>
				</div>

				{view === 'list' ? (
					<div className="space-y-8" role="list" aria-label={t('projectsListLabel')}>
						{projects.map(project => (
							<ProjectCard key={project.name} project={project} />
						))}
					</div>
				) : (
					<div>
						<div
							ref={trackRef}
							onScroll={handleScroll}
							role="list"
							aria-label={t('projectsListLabel')}
							className="flex items-start overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
						>
							{projects.map(project => (
								<div key={project.name} className="w-full flex-none snap-center px-1">
									<ProjectCard project={project} />
								</div>
							))}
						</div>

						<div className="flex items-center justify-center gap-6 mt-6">
							<button
								type="button"
								onClick={() => goTo(activeIndex - 1)}
								disabled={activeIndex === 0}
								aria-label={t('projectsCarouselPrevious')}
								className={arrowButtonClass}
							>
								<ChevronLeft size={20} aria-hidden="true" />
							</button>

							<div className="flex gap-2">
								{projects.map((project, index) => (
									<button
										key={project.name}
										type="button"
										onClick={() => goTo(index)}
										aria-label={t('projectsCarouselGoTo', { name: project.name })}
										aria-current={index === activeIndex ? 'true' : undefined}
										className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
											index === activeIndex ? 'w-8 bg-cyan-400' : 'w-2.5 bg-blue-500/40 hover:bg-blue-400/70'
										}`}
									/>
								))}
							</div>

							<button
								type="button"
								onClick={() => goTo(activeIndex + 1)}
								disabled={activeIndex === projects.length - 1}
								aria-label={t('projectsCarouselNext')}
								className={arrowButtonClass}
							>
								<ChevronRight size={20} aria-hidden="true" />
							</button>
						</div>

						<p className="sr-only" aria-live="polite">
							{t('projectsCarouselPosition', { current: activeIndex + 1, total: projects.length })}
						</p>
					</div>
				)}

				<p className="text-blue-400 text-center mt-10">{t('projectsMoreComing')}</p>
			</div>
		</section>
	);
};
