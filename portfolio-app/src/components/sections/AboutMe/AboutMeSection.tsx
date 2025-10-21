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
						I’m a passionate full stack developer based in Catalonia. My journey in web development began with curiosity
						and a love for creating beautiful user interfaces. But after some time I started taking interest in how the
						backend works.
					</p>
					<p className="text-gray-300 leading-relaxed mb-6">Here’s a glimpse into my world:</p>
					<ul className="space-y-2 text-gray-300 list-disc list-inside">
						<li>I thrive on turning ideas into pixel-perfect designs.</li>
						<li>I'm constantly learning and experimenting with new technologies.</li>
						<li>I believe in clean code, best practices, and continuous improvement.</li>
					</ul>
				</div>

				{/* Developer Capabilities */}
				<div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
					<h3 className="text-2xl font-bold mb-4 text-blue-400">What I Do</h3>
					<ul className="space-y-2 text-gray-300 list-disc list-inside">
						<li>Build responsive and user-friendly web applications.</li>
						<li>Design elegant UIs that enhance user experiences.</li>
						<li>Collaborate with backend developers to create seamless integrations.</li>
						<li>Optimize performance for faster load times.</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
);
