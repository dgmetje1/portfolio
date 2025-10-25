import { skills } from '@/data/skills';
import useToggle from '@/hooks/useToggle';
import { ChevronDown } from 'lucide-react';
import { useMemo } from 'react';

const SkillsSection = () => {
	const [toggleValue, toggle] = useToggle();

	const shownSkills = useMemo(() => {
		if (toggleValue) return skills;

		return skills.slice(0, 9);
	}, [toggleValue]);

	return (
		<section id="skills" className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
					Skills & Technologies
				</h2>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{shownSkills.map((skill, index) => (
						<div
							key={index}
							className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all hover:shadow-xl hover:shadow-blue-500/10"
						>
							<div className="flex justify-between items-center mb-3">
								<h3 className="text-lg font-semibold text-gray-200">{skill.name}</h3>
								<span className="text-blue-400 text-sm font-bold">{skill.level}%</span>
							</div>
							<div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
								<div
									className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full transition-all duration-1000"
									style={{ width: `${skill.level}%` }}
								></div>
							</div>
						</div>
					))}
				</div>
				{!toggleValue && (
					<div className="flex justify-center w-full mt-12 my-4">
						<button onClick={toggle} className="animate-bounce text-blue-400 hover:text-blue-300 transition-colors">
							<ChevronDown size={32} />
						</button>
					</div>
				)}
			</div>
		</section>
	);
};

export default SkillsSection;
