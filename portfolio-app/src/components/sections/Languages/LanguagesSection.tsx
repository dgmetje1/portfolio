import { languages } from '@/data/languages';

export default () => (
	<section id="languages" className="py-20 px-4 bg-slate-900/50">
		<div className="max-w-6xl mx-auto">
			<h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
				Languages
			</h2>

			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				{languages.map((lang, index) => (
					<div
						key={index}
						className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all hover:shadow-xl hover:shadow-blue-500/10"
					>
						<h3 className="text-lg font-semibold text-gray-200 mb-2">{lang.name}</h3>
						<p className="text-blue-400 font-medium">{lang.level}</p>
					</div>
				))}
			</div>
		</div>
	</section>
);
