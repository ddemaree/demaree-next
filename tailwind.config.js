const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	darkMode: 'media',
	purge: {
		layers: ['utilities'],
		content: [
			'./**/*.js',
			"./**/*.html",
			"./**/*.md"
		]
	},
	variants: {
		extend: {
			gridColumn: ['responsive', 'even', 'odd'],
			gridColumnStart: ['responsive', 'even', 'odd'],
			gridColumnEnd: ['responsive', 'even', 'odd'],
			margin: ['responsive', 'last']
		}
	},
	plugins: [
		require('@ddemaree/dynamic-ink')
	],
	theme: {
		screens: {
			'xs': '370px', // iPhone X/11/12 and larger
			'sm': '660px',
			'md': '880px',
			'lg': '1020px'
		},
		extend: {
			width: {
				['full-inset']: `calc(100% - (2 * var(--inset-x, ${defaultTheme.spacing[6]})))`
			},
			minHeight: {
				['screen-inset']: `calc(100vh - var(--header-height, ${defaultTheme.spacing[20]}))`
			},
			fontFamily: {
				sans: ['soehne-web', ...defaultTheme.fontFamily.sans],
				'sans-display': ['soehne-breit-web', 'soehne-web', ...defaultTheme.fontFamily.sans],
				serif: ['ivar-text', ...defaultTheme.fontFamily.serif],
				'roslindale': ['Roslindale Variable', 'ivar-text', ...defaultTheme.fontFamily.serif],
				'roslindale-2': ['"Roslindale Variable 2"', 'ivar-text', ...defaultTheme.fontFamily.serif],
				mono: ['JetBrains Mono', 'Source Code Pro', ...defaultTheme.fontFamily.mono]
			},
		},
	},
};