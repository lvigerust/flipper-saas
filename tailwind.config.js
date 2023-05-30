/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			maxWidth: {
				'8xl': '90rem'
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system'],
				Display: ['Lexend', 'ui-sans-serif', 'system-ui', '-apple-system']
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		logs: false,
		themes: ['night', 'dark'],
		darkTheme: 'night'
	}
}
