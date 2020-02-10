
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  variants: ['responsive', 'first', 'last'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        background: {
          default: 'var(--color-background, #fff)'
        },
        container: {
          default: 'var(--color-container, rgba(0,0,0,0.12))'
        },
        ink: {
          default: 'var(--color-ink, #000c)',
          medium: 'var(--color-ink-medium, #0009)',
          low: 'var(--color-ink-low, #0004)',
          extralow: 'var(--color-ink-extralow, #0002)',
          bold: 'var(--color-ink-strong, #000)'
        },
      },
      fontFamily: {
        sans: ['soehne-web', ...defaultTheme.fontFamily.sans],
        serif: ['ivar-text', ...defaultTheme.fontFamily.serif],
        'display-serif': ['freight-display-pro', ...defaultTheme.fontFamily.serif],
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono]
      },
      spacing: {
        line: '1.6rem',
      },
      width: {
        content: '34rem',
        wide: '52rem'
      },
      height: {
        verytall: '20rem'
      },
      maxWidth: {
        content: '34rem',
        wide: '52rem'
      },
      screens: {
        'xxs': { 'max': '410px' },
        'xs':  { 'max': '512px' },
        'portrait': {'raw': '(orientation: portrait)'},
        'dark': {'raw': '(prefers-color-scheme: dark)'},
      }
    },
  },
}
