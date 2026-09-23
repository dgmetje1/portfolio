import { Menu, X } from 'lucide-react';
import { useI18n } from '@/i18n/useI18n';
import type { HeaderProps } from './types';
import LanguageSwitcher from '../LanguageSwitcher';
import type { Sections } from '../types';

const sections: { id: Sections; label: string; href: string; isExternal: boolean }[] = [
	{ id: 'home', label: 'home', href: '/', isExternal: false },
	{ id: 'about', label: 'about', href: '/?section=about', isExternal: true },
	{ id: 'experience', label: 'experience', href: '/?section=experience', isExternal: true },
	{ id: 'skills', label: 'skills', href: '/?section=skills', isExternal: true },
	{ id: 'education', label: 'education', href: '/?section=education', isExternal: true },
	{ id: 'languages', label: 'languages', href: '/?section=languages', isExternal: true },
	{ id: 'projects', label: 'projects', href: '/projects', isExternal: true },
	{ id: 'contact', label: 'contact', href: '/?section=contact', isExternal: true },
];

export default ({
	isScrolled,
	scrollToSection,
	isMenuOpen,
	setIsMenuOpen,
	activeSection,
	currentPage
}: HeaderProps) => {
	const { t } = useI18n();

	const handleSectionClick = (section: (typeof sections)[0]) => {
		if (section.isExternal) {
			window.location.href = section.href;
		} else if (currentPage === '/') {
			scrollToSection(section.id);
		} else {
			window.location.href = section.href;
		}
	};

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
								href="/"
								className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
							>
								DGM
							</a>
						</div>

						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4" role="menubar">
								{sections.map((item, index) => (
									<button
										key={item.id}
										role="menuitem"
										aria-current={activeSection === item.id ? 'page' : currentPage === item.href ? 'page' : undefined}
										onClick={() => handleSectionClick(item)}
										className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 ${
											activeSection === item.id || (currentPage && currentPage === item.href)
												? 'bg-blue-600 text-white'
												: 'text-gray-300 hover:bg-blue-600/50 hover:text-white'
										}`}
									>
										{sectionsTranslated[index]}
									</button>
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
								<button
									key={item.id}
									role="menuitem"
									aria-current={activeSection === item.id ? 'page' : currentPage === item.href ? 'page' : undefined}
									onClick={() => handleSectionClick(item)}
									className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
								>
									{sectionsTranslated[index]}
								</button>
							))}
							<div className="pt-4 border-t border-slate-700">
								<LanguageSwitcher />
							</div>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
};
