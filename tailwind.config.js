/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			maxWidth: {
				'8xl': '90rem'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif', 'system-ui']
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		logs: false,
		themes: ['light', 'dark']
	}
}
