import type { Lang } from '@/i18n/config';

export type Project = {
	name: string;
	description: Record<Lang, string>;
	/** Technologies the project was built with */
	technologies: string[];
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
		technologies: ['NestJS', 'React'],
		link: '', // TODO: add the project URL (live demo or repository)
		video: 'assets/culinary_ethos.mp4',
		poster: 'assets/culinary_ethos-poster.jpg'
	},
	{
		name: 'Shelf Less',
		description: {
			en: 'A mobile app to cut food waste: track what’s in your fridge, freezer and pantry, add items in two taps with smart presets and see at a glance what to use up before it expires. Private by default, with optional cloud sync to share your kitchen with your household.',
			ca: 'Una aplicació mòbil per reduir el malbaratament d’aliments: controla què hi ha a la nevera, el congelador i el rebost, afegeix productes en dos tocs amb preajustos intel·ligents i veu d’un cop d’ull què has de gastar abans que caduqui. Privada per defecte, amb sincronització opcional al núvol per compartir la cuina amb la teva llar.',
			es: 'Una aplicación móvil para reducir el desperdicio de alimentos: controla qué hay en tu nevera, congelador y despensa, añade productos en dos toques con ajustes predefinidos inteligentes y ve de un vistazo qué debes gastar antes de que caduque. Privada por defecto, con sincronización opcional en la nube para compartir tu cocina con tu hogar.',
			fr: 'Une application mobile pour réduire le gaspillage alimentaire : suivez le contenu de votre frigo, congélateur et placard, ajoutez des produits en deux touches grâce à des préréglages intelligents et voyez d’un coup d’œil ce qu’il faut consommer avant la date limite. Privée par défaut, avec une synchronisation cloud facultative pour partager votre cuisine avec votre foyer.'
		},
		technologies: ['React Native', 'Supabase'],
		link: '', // TODO: add the project URL (live demo or repository)
		video: 'assets/shelf_less.mp4',
		poster: 'assets/shelf_less-poster.jpg'
	}
];
