import { LanguageProvider } from '@/i18n/LanguageContext';
import Portfolio from './Portfolio';

export default function App() {
	return (
		<LanguageProvider>
			<Portfolio />
		</LanguageProvider>
	);
}