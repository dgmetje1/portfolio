import type { MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/i18n/LanguageContext';
import { getLocalizedPath, type Page } from '@/i18n/config';
import type { HeaderProps } from './types';
import LanguageSwitcher from '../LanguageSwitcher';
import type { Sections } from '../types';

// Each nav item is either a section of the home page or a standalone page
const sections: { id: Sections; label: string; page: Page; isSection: boolean }[] = [
	{ id: 'home', label: 'home', page: 'home', isSection: true },
	{ id: 'about', label: 'about', page: 'home', isSection: true },
	{ id: 'experience', label: 'experience', page: 'home', isSection: true },
	{ id: 'skills', label: 'skills', page: 'home', isSection: true },
	{ id: 'education', label: 'education', page: 'home', isSection: true },
	{ id: 'languages', label: 'languages', page: 'home', isSection: true },
	{ id: 'projects', label: 'projects', page: 'projects', isSection: false },
	{ id: 'contact', label: 'contact', page: 'home', isSection: true }
];

export default ({
	isScrolled,
	scrollToSection,
	isMenuOpen,
	setIsMenuOpen,
	activeSection,
	currentPage
}: HeaderProps) => {
	const { t } = useTranslation();
	const { language } = useLanguage();

	const getHref = (section: (typeof sections)[number]) =>
		getLocalizedPath(language, section.page) + (section.isSection && section.id !== 'home' ? `#${section.id}` : '');

	const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>, section: (typeof sections)[number]) => {
		// Same-page sections scroll smoothly; everything else is a regular link navigation
		if (section.isSection && currentPage === 'home') {
			event.preventDefault();
			scrollToSection(section.id);
			window.history.replaceState(null, '', getHref(section));
		}
	};

	const isActive = (section: (typeof sections)[number]) =>
		section.isSection ? currentPage === 'home' && activeSection === section.id : currentPage === section.page;

	const sectionsTranslated = sections.map(section => t(section.label));

	return (
		<header>
			<nav
				className={`fixed w-full z-50 transition-all duration-300 ${
					isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
				}`}
				aria-label="Main navigation"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center">
							<a
								href={getLocalizedPath(language)}
								className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
							>
								DGM
							</a>
						</div>

						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4" role="menubar">
								{sections.map((item, index) => (
									<a
										key={item.id}
										href={getHref(item)}
										role="menuitem"
										aria-current={isActive(item) ? 'page' : undefined}
										onClick={e => handleSectionClick(e, item)}
										className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 ${
											isActive(item) ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-blue-600/50 hover:text-white'
										}`}
									>
										{sectionsTranslated[index]}
									</a>
								))}
							</div>
						</div>

						<div className="hidden md:block">
							<LanguageSwitcher />
						</div>

						<div className="md:hidden">
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								aria-expanded={isMenuOpen}
								aria-controls="mobile-menu"
								aria-label={isMenuOpen ? t('closeMenu') : t('openMenu')}
								className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded p-2"
							>
								{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile menu */}
				{isMenuOpen && (
					<div
						id="mobile-menu"
						className="md:hidden bg-slate-900/95 backdrop-blur-sm"
						role="navigation"
						aria-label="Mobile navigation"
					>
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
							{sections.map((item, index) => (
								<a
									key={item.id}
									href={getHref(item)}
									role="menuitem"
									aria-current={isActive(item) ? 'page' : undefined}
									onClick={e => handleSectionClick(e, item)}
									className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
								>
									{sectionsTranslated[index]}
								</a>
							))}
							<div className="pt-4 border-t border-slate-700">
								<LanguageSwitcher id="language-select-mobile" />
							</div>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
};
