const _ = require('lodash')
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin')

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
		// Add support for utility-based theming
		plugin(({ addUtilities, addBase, theme }) => {
			const propKeys = {
				'surface': '--color-background',
				'ink': '--color-ink',
				'inkBold': '--color-ink-strong',
				'inkMedium': '--color-ink-medium',
				'inkLight': '--color-ink-light',
				'accent': '--color-accent'
			}

			const themeColors = theme('colors')

			const getInkUtils = (colors, utilsObj = {}, prefix = '') => {
				const colorPairs = Object.entries(colors)

				colorPairs.forEach(([key, values]) => {
					if(typeof values === 'string') {
						_.forIn(propKeys, (customProperty, propKey) => {
							utilsObj[`.dd-${propKey}${prefix}-${key}`] = {
								[customProperty]: values
							}
						})
					} else if(typeof values === 'object') {
						getInkUtils(values, utilsObj, `-${key}`)
					}
				})

				return utilsObj
			}

			const inkUtils = getInkUtils(themeColors)
			
			// Now add the text and background utilities for each color
			_.forIn(propKeys, (customProperty, propKey) => {
				inkUtils[`.text-${propKey}`] = {
					color: `var(${customProperty})`
				}
				inkUtils[`.bg-${propKey}`] = {
					backgroundColor: `var(${customProperty})`
				}
				inkUtils[`.border-${propKey}`] = {
					borderColor: `var(${customProperty})`
				}
			})

			addUtilities(inkUtils, ['dark', 'hover'])

			addBase({
				':root': {
					'background-color': 'var(--color-background)',
					'--color-ink': theme('colors.gray.800'),
					'--color-ink-strong': theme('colors.black'),
					'--color-ink-medium': theme('colors.gray.500'),
					'--color-ink-light': theme('colors.gray.100'),
					'--color-background': theme('colors.white'),
					'--color-accent': theme('colors.red.600'),
					'@media (prefers-color-scheme: dark)': {
						'--color-ink': theme('colors.gray.300'),
						'--color-ink-strong': theme('colors.white'),
						'--color-ink-medium': theme('colors.gray.400'),
						'--color-ink-light': theme('colors.gray.700'),
						'--color-background': theme('colors.black'),
						'--color-accent': theme('colors.red.400'),
					}
				}
			})
		})
	],
	theme: {
		screens: {
			'xs': '370px', // iPhone X/11/12 and larger
			'sm': '660px',
			'md': '880px',
			'lg': '1020px'
		},
		extend: {
			fontFamily: {
				sans: ['soehne-web', ...defaultTheme.fontFamily.sans],
				'sans-display': ['soehne-breit-web', 'soehne-web', ...defaultTheme.fontFamily.sans],
				serif: ['ivar-text', ...defaultTheme.fontFamily.serif],
				'serif-display': ['FreightDisplayPro', 'ivar-text', ...defaultTheme.fontFamily.serif],
				'roslindale': ['Roslindale Variable', 'ivar-text', ...defaultTheme.fontFamily.serif],
				'roslindale-2': ['"Roslindale Variable 2"', 'ivar-text', ...defaultTheme.fontFamily.serif],
				mono: ['JetBrains Mono', 'Source Code Pro', ...defaultTheme.fontFamily.mono]
			},
		},
	},
};