const { fontFamily, spacing, fontSize } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

const gridPlugin = plugin(({ addComponents, theme }) => {
  const gutterCol = `minmax(${theme("spacing.8")}, var(--layout-gutter))`;

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
})

module.exports = {
  mode: 'jit',
  darkMode: 'media',
  purge: [
    "./site/**/*.html",
    "./site/**/*.{md,mdx}",
    "./src/**/*.{js,vue}"
  ],
  theme: {
    screens: {
      'sm': '600px',
      'mobile': { max: '600px' },
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    colors: {
      red: colors.red,
      gray: colors.warmGray,
      white: colors.white,
      black: colors.black,
      blue: colors.cyan,
      yellow: colors.amber,
      purple: colors.purple,
      current: 'currentColor',
      transparent: 'transparent'
    },
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
      accent: colors.red[500],
      '@dark': {
        background: {
          DEFAULT: colors.trueGray[900],
          bold: colors.black
        },
        ink: {
          bold: colors.white,
          DEFAULT: colors.trueGray[300],
          medium: colors.trueGray[500],
          light: colors.trueGray[700],
          xlight: colors.trueGray[900]
        },
        accent: colors.red[400],
      }
    },
    typography: {
      DEFAULT: {
        css: {
          color: 'var(--color-ink)',
          fontSize: fontSize['lg'][0],
          '--stack-spacing': spacing['6'],
          '> *': {
            gridColumn: 'content',
          },
          '.alignwide': {
            gridColumn: 'wide'
          },
          '.alignfull': {
            gridColumn: 'full'
          },
          '> * + *': {
            marginTop: 'var(--stack-spacing)',
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
            lineHeight: '1.25',
            '& + *': {
              marginTop: spacing[4]
            }
          },
          '> h1, > h2': {
            color: 'var(--color-ink-bold)',
            fontSize: fontSize['2xl'][0],
            fontWeight: 600,
            marginTop: spacing[12]
          },
          '> h3': {
            fontSize: fontSize['xl'][0],
            fontWeight: 500,
            marginTop: spacing[8]
          },
          '> figure, > figure + *': {
            '--stack-spacing': spacing[8]
          }
        }
      }
    },
    extend: {
      letterSpacing: {
        xtra: '.375em',
        ultra: '.5em'
      },
      fontFamily: {
        sans: ["soehne-web", ...fontFamily.sans],
        ['sans-wide']: ["soehne-breit-web", "soehne-web", ...fontFamily.sans],
        serif: ["ivar-text", ...fontFamily.serif],
        mono: ["soehne-mono-web", ...fontFamily.mono],
        ['roslindale']: ["Roslindale Variable", ...fontFamily.serif],
        ['roslindale-2']: [`"Roslindale Variable 2"`, ...fontFamily.serif]
      }
    }
  },
  plugins: [
    require('@ddemaree/dynamic-ink'),
    require('@tailwindcss/typography'),
    gridPlugin,
  ]
}

// const { fontFamily } = require('tailwindcss/defaultTheme');
// const colors = require('tailwindcss/colors');
// const theme = require('tailwindcss/defaultTheme');
// const plugin = require('tailwindcss/plugin')

// module.exports = {
//   mode: 'jit',
//   darkMode: "media",
//   important: false,
//   purge: [
//     "./**/*.{md,mdx}",
//     "./**/*.html",
//     "./**/*.{js,jsx,ts,tsx,vue}",
//   ],
//   theme: {
//     screens: {
//       'sm': '600px',
//       // => @media (min-width: 640px) { ... }
//       'mobile': { max: '600px'},

//       'md': '768px',
//       // => @media (min-width: 768px) { ... }

//       'lg': '1024px',
//       // => @media (min-width: 1024px) { ... }

//       'xl': '1280px',
//       // => @media (min-width: 1280px) { ... }
//     },
//     extend: {
//       themeColors: {
//         background: {
//           DEFAULT: colors.warmGray[50],
//           bold: colors.white
//         },
//         ink: {
//           bold: colors.black,
//           DEFAULT: colors.warmGray[800],
//           medium: colors.warmGray[600],
//           light: colors.warmGray[300],
//           xlight: colors.warmGray[100]
//         },
//         accent: colors.red[500],
//         '@dark': {
//           background: {
//             DEFAULT: colors.trueGray[900],
//             bold: colors.black
//           },
//           ink: {
//             bold: colors.white,
//             DEFAULT: colors.trueGray[300],
//             medium: colors.trueGray[500],
//             light: colors.trueGray[700],
//             xlight: colors.trueGray[900]
//           },
//           accent: colors.red[300],
//         }
//       },
//       letterSpacing: {
//         xtra: '.375em',
//         ultra: '.5em'
//       },
//       fontFamily: {
//         sans: ["soehne-web", ...fontFamily.sans],
//         ['sans-wide']: ["soehne-breit-web", "soehne-web", ...fontFamily.sans],
//         serif: ["ivar-text", ...fontFamily.serif],
//         mono: ["soehne-mono-web", ...fontFamily.mono],
//         ['roslindale']: ["Roslindale Variable", ...fontFamily.serif],
//         ['roslindale-2']: [`"Roslindale Variable 2"`, ...fontFamily.serif]
//       }
//     },
//     typography: {
//       DEFAULT: {
//         css: {
//           color: 'var(--color-ink)',
//           fontSize: theme.fontSize.lg,
//           '> *': {
//             gridColumn: 'content',
//             marginBottom: theme.spacing['6']
//           },
//           'p, blockquote, ul, li, figure, > *': {
//             marginBottom: theme.spacing['6']
//           },
//           ':first-child': {
//             marginTop: 0
//           },
//           ':last-child': {
//             marginBottom: 0
//           },
//           '.alignwide': {
//             gridColumn: 'wide'
//           },
//           '.alignfull': {
//             gridColumn: 'full'
//           },
//           'a': {
//             color: 'var(--color-ink-bold)',
//             textDecoration: 'underline',
//             fontWeight: 500
//           },
//           'strong': {
//             color: 'var(--color-ink-bold)'
//           },
//           'h1, h2, h3, h4, h5, h6': {
//             marginBottom: theme.spacing[4],
//             lineHeight: '1.25'
//           },
//           'h1, h2': {
//             color: 'var(--color-ink-bold)',
//             fontSize: theme.fontSize['2xl'],
//             fontWeight: 600,
//             marginTop: theme.spacing[12]
//           },
//           'h3': {
//             fontSize: theme.fontSize['xl'],
//             fontWeight: 500,
//             marginTop: theme.spacing[8]
//           }
//         }
//       }
//     },
//     colors: {
//       red: colors.red,
//       gray: colors.trueGray,
//       coolGray: colors.warmGray,
//       white: colors.white,
//       black: colors.black,
//       blue: colors.cyan,
//       current: 'currentColor',
//       transparent: 'transparent'
//     }
//   },
//   plugins: [
// 		plugin(({ addComponents, theme }) => {
// 			const gutterCol = `minmax(${theme("spacing.8")}, var(--layout-gutter))`;

// 			addComponents({
// 				'.dd-grid-cols': {
// 					'--layout-width': '600px',
// 					'--layout-gap': '0px',
// 					'--layout-gutter': 'calc(50vw - (var(--layout-width) / 2) - var(--layout-gap))',
// 					'grid-template-columns': `
// 						[full-start wide-start]
// 						${gutterCol}
// 						[content-start] repeat(4, 1fr) [content-end]
// 						${gutterCol}
// 						[wide-end full-end];
// 					`,
// 					'@screen sm' : {
// 						'--layout-width': '920px',
// 						'grid-template-columns': `
// 							[full-start]
// 							${gutterCol}
// 							[wide-start]
// 							1fr
// 							[content-start] repeat(6, 1fr) [content-end]
// 							1fr
// 							[wide-end]
// 							${gutterCol}
// 							[full-end];
// 						`
// 					}
// 				},
// 				'.grid-col-content': {
// 					gridColumn: 'content'
// 				},
// 				'.grid-col-wide': {
// 					gridColumn: 'wide'
// 				},
// 				'.grid-col-full': {
// 					gridColumn: 'full'
// 				}
// 			})
// 		}),
//     require('@tailwindcss/typography'),
// 		require('@ddemaree/dynamic-ink')
// 	],
// };
