/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Custom blue gradient colors
				'blue-950': '#0a1628'
			},
			animation: {
				bounce: 'bounce 1s infinite'
			},
			keyframes: {
				bounce: {
					'0%, 100%': {
						transform: 'translateY(-25%)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': {
						transform: 'translateY(0)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
					}
				}
			},
			backdropBlur: {
				xs: '2px'
			}
		}
	},
	plugins: []
};
