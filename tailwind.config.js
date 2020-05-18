const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: [
    './src/**/*.md',
    './src/**/*.html',
    './src/**/*.njk',
  ],
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
				xxs: { max: '410px' },
				xs: { max: '512px' },
				portrait: { raw: '(orientation: portrait)' },
				dark: { raw: '(prefers-color-scheme: dark)' },
			},
		},
	},
};
