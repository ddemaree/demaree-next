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
					footer: `var(--color-container-footer, ${defaultTheme.colors.gray[200]})`,
				},
				ink: {
					default: `var(--color-ink, ${defaultTheme.colors.gray[900]})`,
					medium: 'var(--color-ink-medium, #0007)',
					low: 'var(--color-ink-low, #0004)',
					extralow: 'var(--color-ink-extralow, #0002)',
					bold: 'var(--color-ink-strong, #000)',
				},
				minHeight: {
					'95': '95vh'
				}
			},
			fontFamily: {
				soehne: ['soehne-web', ...defaultTheme.fontFamily.sans],
				serif: ['ivar-text', ...defaultTheme.fontFamily.serif],
				'display-serif': ['FreightDisplayPro', ...defaultTheme.fontFamily.serif],
				'name-sans': ['NameSans', ...defaultTheme.fontFamily.sans],
				mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
			},
			fontSize: {
				'xs-r': '0.75em',
				'sm-r': '0.875em',
				'base-r': '1em',
				'lg-r': '1.125em',
				'xl-r': '1.25em',
				'2xl-r': '1.5em',
				'3xl-r': '1.875em',
				'4xl-r': '2.25em',
				'5xl-r': '3em',
				'6xl-r': '4em',
			},
			spacing: {
				'4-r': '1em',
				'5-r': '1.25em',
				'6-r': '1.5em',
				'8-r': '2em',
				'10-r': '2.5em',
				'12-r': '3em',
				'16-r': '4em',
				'20-r': '5em',
				'24-r': '6em',
				'32-r': '8em',
				'40-r': '10em',
				'48-r': '12em',
				'56-r': '14em',
				'64-r': '16em',
			},
			width: {
				content: '34rem',
				wide: '52rem',
			},
			height: {
				verytall: '20rem',
			},
			minHeight: {
				'95v': '95vh',
				'75v': '75vh'
			},
			maxWidth: {
				content: '36rem',
				wide: '52rem',
			},
			screens: {
				'lt-sm': { max: '640px' },
				'lt-md': { max: '768px' },
				'xs': { min: '480px' },
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