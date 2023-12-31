/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			regular: ['Roboto', 'sans-serif'],
			preview: ['Roboto Mono', 'monospace'],
			markdown: ['Roboto Slab', 'serif'],
		},
		extend: {
			screens: {
				sm: '375px',
				s: '576px',
				md: '768px',
				lg: '992px',
				xl: '1440px',
				xxl: '2200px',
			},
			colors: {
				blackShadow: '#15161980',
				black300: '#151619',
				black200: '#1D1F22',
				black100: '#2B2D31',
				darkGray300: '#35393F',
				darkGray200: '#5A6069',
				darkGray100: '#7C8187',
				lightGray300: '#C1C4CB',
				lightGray200: '#E4E4E4',
				lightGray100: '#F5F5F5',
				whiteShadow: '#ffffff50',
				white: '#FFFFFF',
				primaryDark: '#E46643',
				primaryLight: '#F39765',
			},
			boxShadow: {
				dark: '0px 0px 21px -4px rgba(0, 0, 0, 1)',
				light: '0px 0px 21px -4px rgba(144, 144, 144, 1)',
			},
		},
	},
	plugins: [],
};
