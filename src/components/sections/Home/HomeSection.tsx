import { ChevronDown, Code, Linkedin } from 'lucide-react';
import type { HomeSectionProps } from './types';

export default ({ scrollToSection }: HomeSectionProps) => (
	<section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
		<div className="max-w-4xl mx-auto text-center">
			<div className="mb-8">
				<div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 p-1">
					<div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
						<Code size={48} className="text-blue-400" />
					</div>
				</div>
			</div>

			<h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
				Dani Garcia Metje
			</h1>

			<p className="text-2xl md:text-3xl text-blue-300 mb-6">Senior Frontend Web Developer</p>

			<p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
				Building exceptional web experiences with React, Angular, and modern frontend technologies. Every pixel with
				purpose. Every click with care.
			</p>

			<div className="flex flex-wrap justify-center gap-4 mb-12">
				<a
					href="https://github.com/dgmetje1"
					target="_blank"
					rel="noopener noreferrer"
					className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
				>
					<Code size={20} />
					GitHub
				</a>
				<a
					href="https://www.linkedin.com/in/dani-garcia-metje/"
					target="_blank"
					rel="noopener noreferrer"
					className="px-6 py-3 bg-slate-800 rounded-lg font-semibold hover:bg-slate-700 hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
				>
					<Linkedin size={20} />
					LinkedIn
				</a>
			</div>

			<button
				title="Go to first section"
				aria-label="Go to first section"
				onClick={() => scrollToSection('about')}
				className="animate-bounce text-blue-400 hover:text-blue-300 transition-colors"
			>
				<ChevronDown size={32} />
			</button>
		</div>
	</section>
);
