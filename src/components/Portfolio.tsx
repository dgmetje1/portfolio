import { useState, Suspense, lazy } from 'react';
import { Linkedin } from 'lucide-react';

import { ThreeBackground } from './ThreeBackground';
import useIsScrolled from '@/hooks/useIsScrolled';
import type { Sections } from './types';
import Header from './Header';
import HomeSection from './sections/Home/HomeSection';
import { useI18n } from '@/i18n/useI18n';

// Lazy load non-critical sections
const AboutMeSection = lazy(() => import('./sections/AboutMe/AboutMeSection'));
const ExperienceSection = lazy(() => import('./sections/Experience/ExperienceSection'));
const SkillsSection = lazy(() => import('./sections/Skills/SkillsSection'));
const EducationSection = lazy(() => import('./sections/Education/EducationSection'));
const LanguagesSection = lazy(() => import('./sections/Languages/LanguagesSection'));
const ContactSection = lazy(() => import('./sections/Contact/ContactSection'));
const Footer = lazy(() => import('./Footer/Footer'));

const SectionFallback = () => null;

export default () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState<Sections>('home');
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
			/>
			<main id="main-content" role="main">
				<HomeSection scrollToSection={scrollToSection} />
				<Suspense fallback={<SectionFallback />}>
					<AboutMeSection />
				</Suspense>
				<Suspense fallback={<SectionFallback />}>
					<ExperienceSection />
				</Suspense>
				<Suspense fallback={<SectionFallback />}>
					<SkillsSection />
				</Suspense>
				<Suspense fallback={<SectionFallback />}>
					<EducationSection />
				</Suspense>
				<Suspense fallback={<SectionFallback />}>
					<LanguagesSection />
				</Suspense>
				<Suspense fallback={<SectionFallback />}>
					<ContactSection />
				</Suspense>
			</main>
			<Suspense fallback={<SectionFallback />}>
				<Footer />
			</Suspense>
		</div>
	);
};
