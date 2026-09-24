import type { Page } from '@/i18n/config';
import type { Sections } from '../types';

export type HeaderProps = {
	isScrolled: boolean;
	scrollToSection: (id: Sections) => void;
	isMenuOpen: boolean;
	setIsMenuOpen: (isMenuOpen: boolean) => void;
	activeSection: Sections;
	currentPage: Page;
};
