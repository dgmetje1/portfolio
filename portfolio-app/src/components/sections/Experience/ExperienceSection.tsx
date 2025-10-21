import { experiences } from '@/data/experiences';

export default () => (
	<section id="experience" className="py-20 px-4 bg-slate-900/50">
		<div className="max-w-6xl mx-auto">
			<h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
				Experience
			</h2>

			<div className="space-y-8">
				{experiences.map((exp, index) => (
					<div
						key={index}
						className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all hover:shadow-xl hover:shadow-blue-500/10"
					>
						<div className="flex flex-wrap items-start justify-between mb-4">
							<div>
								<h3 className="text-2xl font-bold text-blue-400 mb-1">{exp.role}</h3>
								<p className="text-xl text-gray-300 mb-2">{exp.company}</p>
								<p className="text-sm text-gray-400">{exp.location}</p>
							</div>
							<div className="text-right">
								<p className="text-blue-400 font-semibold">{exp.period}</p>
								<p className="text-sm text-gray-400">{exp.duration}</p>
							</div>
						</div>

						<p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

						<div className="flex flex-wrap gap-2">
							{exp.highlights.map((highlight, idx) => (
								<span key={idx} className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm">
									{highlight}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
);
