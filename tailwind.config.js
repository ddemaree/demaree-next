const _ = require('lodash')
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

const { spacing } = defaultTheme

// Make relative variants of spacing
const spacingKeys = Object.keys(spacing)
let emSpacing = {}
spacingKeys.forEach(key => {
	if(key !== 'px') {
		const emKey = `${key}--e`
		emSpacing[emKey] = spacing[key].replace("rem", "em")
	}
})

module.exports = {
	darkMode: 'media',
	purge: {
		layers: ['utilities'],
		content: [
			'./**/*.js'
		]
	},
	variants: {
		margin: ['responsive', 'last']
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
			})

			addUtilities(inkUtils, ['dark'])

			addBase({
				'body': {
					'--color-ink': theme('colors.gray.800'),
					'--color-ink-strong': theme('colors.black'),
					'--color-ink-medium': theme('colors.gray.500'),
					'--color-ink-light': theme('colors.gray.100'),
					'--color-surface': theme('colors.white'),
					'--color-accent': theme('colors.red.600')
				}
			})
		})
	],
	theme: {
		extend: {
			colors: {
				white: '#fff',
				// background: {
				// 	DEFAULT: `var(--color-background, ${colors.white})`,
				// },
				// ink: {
				// 	DEFAULT: `var(--color-ink, ${colors.gray[900]})`,
				// 	medium: `var(--color-ink-medium, ${colors.gray[600]})`,
				// 	low: 'var(--color-ink-low, #0004)',
				// 	extralow: 'var(--color-ink-extralow, #0002)',
				// 	bold: 'var(--color-ink-strong, #000)',
				// 	accent: `var(--color-ink-accent, ${colors.teal[700]})`
				// },
			},
			fontFamily: {
				sans: ['soehne-web', ...defaultTheme.fontFamily.sans],
				'sans-display': ['soehne-breit-web', 'soehne-web', ...defaultTheme.fontFamily.sans],
				serif: ['ivar-text', ...defaultTheme.fontFamily.serif],
				mono: ['Source Code Pro', ...defaultTheme.fontFamily.mono],
			},
			spacing: Object.assign({},
				emSpacing
			),
			screens: {
				'xxs': { min: '360px' },
				'xs': { min: '480px' },
			},
		},
	},
};