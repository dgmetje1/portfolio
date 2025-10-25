import { useState } from 'react';
import { Linkedin } from 'lucide-react';

import { ThreeBackground } from './ThreeBackground';
import SkillsSection from './sections/Skills';
import useIsScrolled from '@/hooks/useIsScrolled';
import ExperienceSection from './sections/Experience';
import EducationSection from './sections/Education';
import LanguagesSection from './sections/Languages';
import type { Sections } from './types';
import Header from './Header';
import AboutMeSection from './sections/AboutMe';
import HomeSection from './sections/Home/HomeSection';
import ContactSection from './sections/Contact/ContactSection';
import Footer from './Footer';

export default () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState<Sections>('home');
	const [isScrolled] = useIsScrolled();

	const scrollToSection = (id: Sections) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			setActiveSection(id);
			setIsMenuOpen(false);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
			<ThreeBackground />
			<Header
				activeSection={activeSection}
				isMenuOpen={isMenuOpen}
				isScrolled={isScrolled}
				scrollToSection={scrollToSection}
				setIsMenuOpen={setIsMenuOpen}
			/>
			<HomeSection scrollToSection={scrollToSection} />
			<AboutMeSection />
			<ExperienceSection />
			<SkillsSection />
			<EducationSection />
			<LanguagesSection />
			<ContactSection />
			<Footer />
		</div>
	);
};
