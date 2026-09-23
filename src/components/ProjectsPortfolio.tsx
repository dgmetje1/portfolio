import { useState, Suspense, lazy } from 'react';

import { ThreeBackground } from './ThreeBackground';
import useIsScrolled from '@/hooks/useIsScrolled';
import type { Sections } from './types';
import Header from './Header';
import { useI18n } from '@/i18n/useI18n';

// Lazy load non-critical sections
const ProjectsSection = lazy(() => import('./sections/Projects/ProjectsSection'));
const Footer = lazy(() => import('./Footer/Footer'));

const SectionFallback = () => null;

export default () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState<Sections>('projects');
	const [isScrolled] = useIsScrolled();
	const { t } = useI18n();

	const scrollToSection = (id: Sections) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			setActiveSection(id);
			setIsMenuOpen(false);
		}
	};

	return (
		<div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
			<ThreeBackground />
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-slate-900 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
			>
				{t('skipToMainContent')}
			</a>
			<Header
				activeSection={activeSection}
				isMenuOpen={isMenuOpen}
				isScrolled={isScrolled}
				scrollToSection={scrollToSection}
				setIsMenuOpen={setIsMenuOpen}
				currentPage="/projects"
			/>
			<main id="main-content" role="main">
				<Suspense fallback={<SectionFallback />}>
					<ProjectsSection />
				</Suspense>
			</main>
			<Suspense fallback={<SectionFallback />}>
				<Footer />
			</Suspense>
		</div>
	);
};