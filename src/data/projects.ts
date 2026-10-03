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
	},
	{
		name: 'VocalFlow',
		description: {
			en: 'An intonation trainer for language learners: speak a phrase and see your pitch curve drawn live over a native speaker’s, with a match score, a per-word breakdown of where you drifted and daily drills picked by spaced repetition. All voice processing runs in the browser, with no backend.',
			ca: 'Un entrenador d’entonació per a estudiants d’idiomes: digues una frase i veu la teva corba de to dibuixada en directe sobre la d’un parlant natiu, amb una puntuació de coincidència, un desglossament per paraula d’on t’has desviat i exercicis diaris triats per repetició espaiada. Tot el processament de veu es fa al navegador, sense backend.',
			es: 'Un entrenador de entonación para estudiantes de idiomas: di una frase y ve tu curva de tono dibujada en directo sobre la de un hablante nativo, con una puntuación de coincidencia, un desglose por palabra de dónde te has desviado y ejercicios diarios elegidos por repetición espaciada. Todo el procesamiento de voz se hace en el navegador, sin backend.',
			fr: 'Un entraîneur d’intonation pour les apprenants en langues : prononcez une phrase et voyez votre courbe de hauteur tracée en direct sur celle d’un locuteur natif, avec un score de correspondance, une analyse mot par mot de vos écarts et des exercices quotidiens choisis par répétition espacée. Tout le traitement de la voix se fait dans le navigateur, sans backend.'
		},
		technologies: ['Vue', 'Web Audio API'],
		link: '', // TODO: add the project URL (live demo or repository)
		video: 'assets/voiceflow.mp4',
		poster: 'assets/voiceflow-poster.jpg'
	},
	{
		name: 'ngx-render-visualizer',
		description: {
			en: 'A dev-only Angular library that shows what change detection really does: which components get checked and why, what OnPush and signals skip, and which DOM nodes the renderer touches. Added with a single provider line, it includes step-by-step replay of each cycle and works with both zoneless and zone.js apps.',
			ca: 'Una llibreria d’Angular per a desenvolupament que mostra què fa realment la detecció de canvis: quins components es revisen i per què, què s’estalvien OnPush i els signals, i quins nodes del DOM toca el renderitzador. S’afegeix amb una sola línia de provider, permet reproduir cada cicle pas a pas i funciona tant en aplicacions zoneless com amb zone.js.',
			es: 'Una librería de Angular para desarrollo que muestra qué hace realmente la detección de cambios: qué componentes se revisan y por qué, qué se ahorran OnPush y los signals, y qué nodos del DOM toca el renderizador. Se añade con una sola línea de provider, permite reproducir cada ciclo paso a paso y funciona tanto en aplicaciones zoneless como con zone.js.',
			fr: 'Une bibliothèque Angular réservée au développement qui montre ce que fait réellement la détection de changements : quels composants sont vérifiés et pourquoi, ce qu’OnPush et les signals évitent, et quels nœuds du DOM le moteur de rendu modifie. Elle s’ajoute en une seule ligne de provider, permet de rejouer chaque cycle pas à pas et fonctionne aussi bien en mode zoneless qu’avec zone.js.'
		},
		technologies: ['Angular', 'TypeScript'],
		link: '', // TODO: add the project URL (live demo or repository)
		video: 'assets/ngx-render-visualizer.mp4',
		poster: 'assets/ngx-render-visualizer-poster.jpg'
	}
];
