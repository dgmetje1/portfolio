import { projects } from '@/data/projects';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';

export default () => {
	const { t } = useTranslation();

	return (
		<section id="projects" aria-labelledby="projects-title" className="min-h-screen px-4 pt-32 pb-20">
			<div className="max-w-4xl mx-auto">
				<header className="text-center mb-16">
					<h1
						id="projects-title"
						className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent"
					>
						{t('projectsSectionTitle')}
					</h1>
					<p className="text-2xl md:text-3xl text-amber-300 mb-6">{t('projectsSectionSubtitle')}</p>
					<p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">{t('projectsSectionDescription')}</p>
				</header>

				<div className="space-y-12" role="list" aria-label={t('projectsListLabel')}>
					{projects.map(project => (
						<ProjectCard key={project.name} project={project} />
					))}
				</div>

				<p className="text-blue-400 text-center mt-12">{t('projectsMoreComing')}</p>
			</div>
		</section>
	);
};
