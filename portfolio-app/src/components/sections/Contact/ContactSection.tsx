import { Linkedin } from 'lucide-react';

export default () => (
	<section id="contact" className="py-20 px-4">
		<div className="max-w-4xl mx-auto text-center">
			<h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
				Let's Connect
			</h2>

			<p className="text-xl text-gray-300 mb-12">
				I'm always interested in hearing about new opportunities and collaborations.
			</p>

			<div className="flex flex-wrap justify-center gap-6">
				<a
					href="https://www.linkedin.com/in/dani-garcia-metje/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-3 px-8 py-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all"
				>
					<Linkedin size={24} className="text-blue-400" />
					<div className="text-left">
						<p className="text-sm text-gray-400">LinkedIn</p>
						<p className="text-gray-200">dani-garcia-metje</p>
					</div>
				</a>
			</div>
		</div>
	</section>
);
