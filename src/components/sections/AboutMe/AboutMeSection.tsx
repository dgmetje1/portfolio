export default () => (
	<section id="about" className="py-20 px-4">
		<div className="max-w-6xl mx-auto">
			<h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
				About Me
			</h2>

			<div className="grid md:grid-cols-2 gap-8">
				{/* Developer Journey & Philosophy */}
				<div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
					<h3 className="text-2xl font-bold mb-4 text-blue-400">My Journey</h3>
					<p className="text-gray-300 leading-relaxed mb-4">
						I've always been fascinated by two things: understanding how things work and finding ways to improve them.
					</p>
					<p className="text-gray-300 leading-relaxed mb-4">
						That curiosity led me from web development into backend systems, automation, AI, and process optimization.
						Today, I combine technical expertise with practical business experience to build solutions that are not only
						functional, but genuinely useful.
					</p>
					<p className="text-gray-300 leading-relaxed mb-4">
						I enjoy tackling complex challenges, learning new technologies, and turning ideas into products that people
						love to use.
					</p>
					<p className="text-gray-300 leading-relaxed mb-4">
						My goal is simple: keep building, keep learning, and leave every system a little better than I found it.
					</p>
				</div>

				{/* Developer Capabilities */}
				<div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
					<h3 className="text-2xl font-bold mb-4 text-blue-400">What I Do</h3>
					<ul className="space-y-2 text-gray-300 list-disc list-inside">
						<li>
							Create digital products that solve real-world problems and deliver meaningful value to users and
							businesses.
						</li>
						<li>Transform manual and time-consuming tasks into efficient, automated workflows.</li>
						<li>
							Push the boundaries of technology by experimenting with AI and emerging technologies to stay at the
							forefront of innovation.
						</li>
						<li>Leverage both technical and business perspectives to simplify processes and maximize efficiency.</li>
						<li>Embrace continuous learning and curiosity as essential tools for growth and innovation.</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
);
