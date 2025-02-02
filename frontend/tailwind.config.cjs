/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#32AFEC',
				primaryDarker: '#1597D7',
				secondary: '#fff',
				secondaryDarker: '#fcfcfc',
				sand: '#F5ECE4',
			},
			flex: {
				3: '3 3 0%',
			},
			backgroundImage: {
				hero: "url('./src/assets/hero-bg.png')",
			},
		},
	},
	safelist: [
		{
			pattern: /(bg|text|border)-(secondary|secondaryDarker)/,
		},
	],
	plugins: [],
}
