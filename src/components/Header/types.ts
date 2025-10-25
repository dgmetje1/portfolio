import type { Sections } from '../types';

export type HeaderProps = {
	isScrolled: boolean;
	scrollToSection: (id: Sections) => void;
	isMenuOpen: boolean;
	setIsMenuOpen: (isMenuOpen: boolean) => void;
	activeSection: Sections;
};
