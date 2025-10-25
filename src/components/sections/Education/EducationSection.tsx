import { certifications } from '@/data/certifications';
import { education } from '@/data/education';
import { Award, GraduationCap } from 'lucide-react';

export default () => (
	<section id="education" className="py-20 px-4 bg-slate-900/50">
		<div className="max-w-6xl mx-auto">
			<h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
				Education & Certifications
			</h2>

			<div className="grid md:grid-cols-2 gap-8 mb-12">
				{education.map((edu, index) => (
					<div
						key={index}
						className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all"
					>
						<GraduationCap size={32} className="text-blue-400 mb-4" />
						<h3 className="text-xl font-bold text-blue-400 mb-2">{edu.degree}</h3>
						<p className="text-lg text-gray-300 mb-2">{edu.institution}</p>
						<p className="text-sm text-gray-400 mb-2">{edu.period}</p>
						<p className="text-sm text-gray-400 mb-3">{edu.field}</p>
						<div className="flex items-center gap-2 mt-4 pt-4 border-t border-blue-500/20">
							<Award size={20} className="text-cyan-400" />
							<span className="text-cyan-400 font-bold text-lg">Score: {edu.score}/10</span>
						</div>
					</div>
				))}
			</div>

			<div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
				<div className="flex items-center gap-2 mb-6">
					<Award size={28} className="text-blue-400" />
					<h3 className="text-2xl font-bold text-blue-400">Certifications</h3>
				</div>
				<div className="grid md:grid-cols-2 gap-4">
					{certifications.map((cert, index) => (
						<div key={index} className="flex items-start gap-3 p-4 bg-purple-600/10 rounded-lg">
							<div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
							<p className="text-gray-300">{cert}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	</section>
);
