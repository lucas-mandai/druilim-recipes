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

      gray: '#303030',
      blueTheme: '#1498D5',
    },

    fontSizes: {
      sm: '1rem',
      md: '1.125rem',
      lg: '1.25px',
      xl: '1.5px',
    },

    // media: {
    //   bpsm: '@media screen and (min-width: 640px)',
    //   bpmd: '@media screen and (min-width: 768px)',
    //   bplg: '@media screen and (min-width: 1024px)',
    //   bpxl: '@media screen and (min-width: 1600px)',
    // },
  },
})
