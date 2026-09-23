import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import i18n from '@/i18n';

export function useI18n() {
	const result = useTranslation();
	const [, setTick] = useState(0);

	useEffect(() => {
		const handler = () => setTick(t => t + 1);
		i18n.on('languageChanged', handler);
		return () => {
			i18n.off('languageChanged', handler);
		};
	}, []);

	return result;
}
