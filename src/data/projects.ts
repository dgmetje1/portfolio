import type { Lang } from '@/i18n/config';

export type Project = {
	name: string;
	description: Record<Lang, string>;
	link: string;
	/** Paths relative to /public; resolved with the site base at render time */
	video: string;
	poster: string;
};

export const projects: Project[] = [
	{
		name: 'Culinary Ethos',
		description: {
			en: 'A recipe platform curated for the discerning palate: save your favorite dishes, drag them into a weekly meal planner and get a shopping list generated automatically.',
			ca: 'Una plataforma de receptes pensada per als paladars més exigents: desa els teus plats preferits, arrossega’ls a un planificador setmanal d’àpats i obtén una llista de la compra generada automàticament.',
			es: 'Una plataforma de recetas pensada para los paladares más exigentes: guarda tus platos favoritos, arrástralos a un planificador semanal de comidas y obtén una lista de la compra generada automáticamente.',
			fr: 'Une plateforme de recettes pensée pour les palais exigeants : enregistrez vos plats préférés, glissez-les dans un planificateur de repas hebdomadaire et obtenez une liste de courses générée automatiquement.'
		},
		link: '', // TODO: add the project URL (live demo or repository)
		video: 'assets/culinary_ethos.mp4',
		poster: 'assets/culinary_ethos-poster.jpg'
	}
];
