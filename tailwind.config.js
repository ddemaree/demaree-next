const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: [
    './11ty-src/**/*.md',
    './11ty-src/**/*.html',
		'./11ty-src/**/*.njk',
		'./src/**/*.js'
	],
	variants: {
		margin: ['responsive', 'last']
	},
	theme: {
		extend: {
			colors: {
				white: '#fff',
				background: {
					default: `var(--color-background, ${defaultTheme.colors.white})`,
				},
				container: {
					default: `var(--color-container, ${defaultTheme.colors.teal[300]})`,
				},
				ink: {
					default: `var(--color-ink, ${defaultTheme.colors.gray[900]})`,
					medium: 'var(--color-ink-medium, #0009)',
					low: 'var(--color-ink-low, #0004)',
					extralow: 'var(--color-ink-extralow, #0002)',
					bold: 'var(--color-ink-strong, #000)',
				},
				minHeight: {
					'95': '95vh'
				}
			},
			fontFamily: {
				sans: ['soehne-web', ...defaultTheme.fontFamily.sans],
				serif: ['ivar-text', ...defaultTheme.fontFamily.serif],
				'display-serif': ['FreightDisplayPro', ...defaultTheme.fontFamily.serif],
				'gimlet-sans': ['gimlet-sans', ...defaultTheme.fontFamily.sans],
				mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
			},
			spacing: {
				line: '1.6rem',
			},
			width: {
				content: '34rem',
				wide: '52rem',
			},
			height: {
				verytall: '20rem',
			},
			maxWidth: {
				content: '36rem',
				wide: '52rem',
			},
			screens: {
				'lt-sm': { max: '640px' },
				'lt-md': { max: '768px' },
				dark: { raw: '(prefers-color-scheme: dark)' },
			},
		},
	},
};

// portrait: { raw: '(orientation: portrait)' },
// sm: '640px',
// md: '768px',
// lg: '1024px',
// xl: '1280px',