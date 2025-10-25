import { Menu, X } from 'lucide-react';
import { sections } from '../constants';
import type { HeaderProps } from './types';

export default ({ isScrolled, scrollToSection, isMenuOpen, setIsMenuOpen, activeSection }: HeaderProps) => {
	return (
		<nav
			className={`fixed w-full z-50 transition-all duration-300 ${
				isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
							DGM
						</span>
					</div>

					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							{sections.map(item => (
								<button
									key={item}
									onClick={() => scrollToSection(item)}
									className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
										activeSection === item
											? 'bg-blue-600 text-white'
											: 'text-gray-300 hover:bg-blue-600/50 hover:text-white'
									}`}
								>
									{item.charAt(0).toUpperCase() + item.slice(1)}
								</button>
							))}
						</div>
					</div>

					<div className="md:hidden">
						<button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{isMenuOpen && (
				<div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{sections.map(item => (
							<button
								key={item}
								onClick={() => scrollToSection(item)}
								className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-blue-600 hover:text-white"
							>
								{item.charAt(0).toUpperCase() + item.slice(1)}
							</button>
						))}
					</div>
				</div>
			)}
		</nav>
	);
};
