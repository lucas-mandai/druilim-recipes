import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    background: '#F0F0F0',
  },

  'body, input, select, textarea, button': {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '1rem',
    color: '#3c3c3c',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },

  button: {
    cursor: 'pointer',
  },
})
