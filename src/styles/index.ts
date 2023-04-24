import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#ffffff',

      gray: '#c3c3c3',
      blueTheme: '#1498D5',
    },

    fontSizes: {
      sm: '1rem',
      md: '1.125rem',
      lg: '1.25px',
      xl: '1.5px',
    },
  },
})
