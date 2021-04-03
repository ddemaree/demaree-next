const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const theme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: "media",
  purge: {
    layers: ["utilities"],
    content: [
			"./**/*.js",
			"./**/*.html",
			"./**/*.md",
			"./**/*.mdx"
		],
  },
  theme: {
    extend: {
      themeColors: {
        background: {
          DEFAULT: colors.warmGray[50],
          bold: colors.white
        },
        ink: {
          bold: colors.black,
          DEFAULT: colors.warmGray[800],
          medium: colors.warmGray[600],
          light: colors.warmGray[300],
          xlight: colors.warmGray[100]
        },
        '@dark': {
          background: {
            DEFAULT: colors.black,
            bold: colors.black
          },
          ink: {
            bold: colors.white,
            DEFAULT: colors.warmGray[300],
            medium: colors.warmGray[500],
            light: colors.warmGray[700],
            xlight: colors.warmGray[900]
          }
        }
      },
      letterSpacing: {
        xtra: '.375em',
        ultra: '.5em'
      },
      fontFamily: {
        sans: ["soehne-web", ...fontFamily.sans],
        ['sans-wide']: ["soehne-breit-web", "soehne-web", ...fontFamily.sans],
        serif: ["ivar-text", ...fontFamily.serif],
        mono: ["soehne-mono-web", ...fontFamily.mono]
      }
    },
    typography: {
      DEFAULT: {
        css: {
          color: 'var(--color-ink)',
          fontSize: theme.fontSize.lg,
          '> *': {
            gridColumn: 'content',
            marginBottom: theme.spacing['6']
          },
          '> :first-child': {
            marginTop: 0
          },
          '> :last-child': {
            marginBottom: 0
          },
          '.alignwide': {
            gridColumn: 'wide'
          },
          '.alignfull': {
            gridColumn: 'full'
          },
          'a': {
            color: 'var(--color-ink-bold)',
            textDecoration: 'underline',
            fontWeight: 500
          },
          'strong': {
            color: 'var(--color-ink-bold)'
          },
          'h1, h2, h3, h4, h5, h6': {
            marginBottom: theme.spacing[4],
            lineHeight: '1.25'
          },
          'h1, h2': {
            color: 'var(--color-ink-bold)',
            fontSize: theme.fontSize['2xl'],
            fontWeight: 600,
            marginTop: theme.spacing[12]
          },
          'h3': {
            fontSize: theme.fontSize['xl'],
            fontWeight: 500,
            marginTop: theme.spacing[8]
          }
        }
      }
    },
    colors: {
      red: colors.red,
      gray: colors.trueGray,
      coolGray: colors.warmGray,
      white: colors.white,
      black: colors.black,
      blye: colors.cyan,
      current: 'currentColor',
      transparent: 'transparent'
    }
  },
  plugins: [
		plugin(({ addComponents, theme }) => {
			const gutterCol = `minmax(${theme("spacing.6")}, var(--layout-gutter))`;

			addComponents({
				'.dd-grid-cols': {
					'--layout-width': '600px',
					'--layout-gap': '0px',
					'--layout-gutter': 'calc(50vw - (var(--layout-width) / 2) - var(--layout-gap))',
					'grid-template-columns': `
						[full-start wide-start]
						${gutterCol}
						[content-start] repeat(4, 1fr) [content-end]
						${gutterCol}
						[wide-end full-end];
					`,
					'@screen sm' : {
						'--layout-width': '920px',
						'grid-template-columns': `
							[full-start]
							${gutterCol}
							[wide-start]
							1fr
							[content-start] repeat(6, 1fr) [content-end]
							1fr
							[wide-end]
							${gutterCol}
							[full-end];
						`
					}
				},
				'.grid-col-content': {
					gridColumn: 'content'
				},
				'.grid-col-wide': {
					gridColumn: 'wide'
				},
				'.grid-col-full': {
					gridColumn: 'full'
				}
			})
		}),
    require('@tailwindcss/typography'),
		require('@ddemaree/dynamic-ink')
	],
};
