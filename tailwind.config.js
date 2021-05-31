const defaultTheme = require('tailwindcss/defaultTheme');

// Utils
const round = (num) => num.toFixed(7).replace(/(\.[0-9]+?)0+$/, '$1').replace(/\.0$/, '');
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;
const px = (px) => `${px}px`;

const myColors = {
	white: '#fff',
	black: '#000',
	offwhite: "#F7F5F0",
  red: {
    [10]: "#fce1e1",
    [20]: "#fac4c4",
    [30]: "#f58c8c",
    [40]: "#f15656",
    [50]: "#d63d3d",
    [60]: "#ae3232",
    [70]: "#802424",
    [80]: "#5b1a1a",
    [90]: "#3e1212",
	},
  gray: {
    [10]: "#e8e7e6",
    [20]: "#d3d1cf",
    [30]: "#ada9a6",
    [40]: "#908a86",
    [50]: "#7b7470",
    [60]: "#645e5a",
    [70]: "#494542",
    [80]: "#33302e",
    [90]: "#22201f",
	},
  blue: {
    [10]: "#dbe8fd",
    [20]: "#bad3fc",
    [30]: "#7babf9",
    [40]: "#4789f7",
    [50]: "#3473d9",
    [60]: "#2a5db0",
    [70]: "#1f4481",
    [80]: "#16305a",
    [90]: "#0f203d",
	},
}

module.exports = {
	darkMode: 'media',

	important: true, // See https://tailwindcss.com/docs/configuration#important
	purge: {
		enabled: process.env.HUGO_ENV === 'production',
    content: [
      './hugo_stats.json',
      './layouts/**/*.html',
      './content/**/*.html',
      './content/**/*.md',
		],
		extractors: [
      {
        extractor: (content) => {
					let els = JSON.parse(content).htmlElements;
					return els.tags.concat(els.classes, els.ids);
				},
        extensions: ['json']
      },
    ],
		mode: 'all',		
	},

	purge: {
		layers: ['utilities'],
		content: [
			'./**/*.js',
			"./**/*.html",
			"./**/*.md"
		]
	},
	corePlugins: [
    'margin',
    'padding',
		'accessibility',
		'alignItems',
		'backgroundColor',
		'borderRadius',
		'display',
		'flex',
		'flexDirection',
		'flexWrap',
		'fontFamily',
		'fontSize',
		'fontStyle',
		'fontWeight',
		'gap',
		'gridColumn',
		'gridColumnStart',
		'gridColumnEnd',
		'gridTemplateColumns',
		'height',
		'justifyContent',
		'letterSpacing',
		'lineHeight',
		'listStyleType',
		'margin',
		'minHeight',
		'maxWidth',
		'objectFit',
		'padding',
		'position',
		'preflight',
		'space',
		'textAlign',
		'textColor',
		'textDecoration',
		'width'
		// 'height',
    // 'backgroundColor',
    // ...
  ],
	variants: {
		backgroundColor: [],
		borderRadius: [],
		fontFamily: [],
		listStyleType: [],
		textColor: [],
		extend: {
			// gridColumn: ['responsive', 'even', 'odd'],
			// gridColumnStart: ['responsive', 'even', 'odd'],
			// gridColumnEnd: ['responsive', 'even', 'odd'],
			margin: ['last']
		}
	},
	plugins: [
		// require('@ddemaree/dynamic-ink')
	],
	theme: {
		screens: {
			// 'xs': '370px', // iPhone X/11/12 and larger
			'sm': '660px',
			'md': '880px',
			// 'lg': '1020px'
		},
		colors: {
			...myColors,
			ink: {
				DEFAULT: `var(--col-ink-base, ${myColors.gray[80]})`,
				bold: `var(--col-ink-bold, ${myColors.black})`,
				medium: `var(--col-ink-medium, ${myColors.gray[50]})`,
				light: `var(--col-ink-light, ${myColors.gray[30]})`
			},
			accent: {
				DEFAULT: `var(--col-accent, ${myColors.red[50]})`,
				light: `var(--col-accent-light, ${myColors.red[30]})`
			},
			primary: {
				DEFAULT: `var(--col-primary, ${myColors.red[50]})`,
				light: `var(--col-primary-light, ${myColors.red[30]})`,
			},
			secondary: {
				DEFAULT: `var(--col-secondary, ${myColors.blue[50]})`,
				light: `var(--col-secondary-light, ${myColors.blue[30]})`
			},
			surface: {
				DEFAULT: `var(--col-surface, ${myColors.offwhite})`
			}
		},
		extend: {
			width: {
				['full-inset']: `calc(100% - (2 * var(--inset-x, ${defaultTheme.spacing[6]})))`,
				'hc': `min(calc(100vw - 3rem), 20rem)`
			},
			minHeight: {
				['screen-inset']: `calc(100vh - var(--header-height, ${defaultTheme.spacing[20]}))`
			},
			fontFamily: {
				sans: ['soehne-web', ...defaultTheme.fontFamily.sans],
				'sans-display': ['soehne-breit-web', 'soehne-web', ...defaultTheme.fontFamily.sans],
				serif: ['ivar-text', ...defaultTheme.fontFamily.serif],
				'roslindale': ['Roslindale Variable', ...defaultTheme.fontFamily.serif],
				'roslindale-2': ['"Roslindale Variable 2"', ...defaultTheme.fontFamily.serif],
				mono: ['soehne-mono', ...defaultTheme.fontFamily.mono]
			},
		},
	},
};