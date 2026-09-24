import { LanguageProvider } from '@/i18n/LanguageContext';
import type { Lang, Page } from '@/i18n/config';
import Portfolio from './Portfolio';
import ProjectsPortfolio from './ProjectsPortfolio';

export default function App({ lang, page }: { lang: Lang; page: Page }) {
	return (
		<LanguageProvider lang={lang} page={page}>
			{page === 'projects' ? <ProjectsPortfolio /> : <Portfolio />}
		</LanguageProvider>
	);
}
