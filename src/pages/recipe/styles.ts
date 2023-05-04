import { styled } from '@/styles'

export const DefaultContainer = styled('div', {
  maxWidth: '1080px',
  margin: '0 auto',
  padding: '15px',
  paddingTop: '6.25rem',
})

export const RecipeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  maxWidth: '640px',
  margin: '0 auto',

  '@media (max-width: 768px)': {
    maxWidth: '100%',
  },

  '.imageContainer': {
    width: '100%',
    height: '360px',
    margin: '1.5rem 0',

    '@media (max-width: 768px)': {
      width: '100%',
    },
  },

  '.recipeInfo': {
    borderRadius: '8px',
    width: '640px',
    background: '$white',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1rem',
    boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.2)',

    '@media (max-width: 768px)': {
      width: '100%',
    },
  },

  '.recipeInfoItem': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '0.2rem',

    strong: {
      textTransform: 'uppercase',
    },

    svg: {
      color: '$blueTheme',
    },
  },

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.2)',
  },
})

export const Ingredients = styled('div', {
  marginTop: '2rem',
  alignSelf: 'self-start',

  ul: {
    listStyle: 'none',
    paddingLeft: '0.5em',
  },

  li: {
    position: 'relative',
    marginBottom: '1em',
    paddingLeft: '1.5em',
  },

  'li::before': {
    content: '',
    display: 'inline-block',
    width: '0.5em',
    height: '0.5em',
    lineHeight: '0.5em',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    background: '$blueTheme',
    borderRadius: '50%',
    position: 'absolute',
    left: '-0.5em',
    top: '10px',
  },

  h2: {
    marginBottom: '1rem',
  },
})

export const Preparation = styled('div', {
  marginTop: '1.5rem',

  h2: {
    marginBottom: '1rem',
  },

  ol: {
    listStyleType: 'none',
    counterReset: 'my-counter',
    paddingLeft: '0.5em',
  },

  li: {
    position: 'relative',
    marginBottom: '1em',
    paddingLeft: '1.5em',
    counterIncrement: 'my-counter',
  },

  'li::before': {
    content: 'counter(my-counter)',
    display: 'inline-block',
    width: '1.2em',
    height: '1.2em',
    lineHeight: '1.2em',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    background: '$blueTheme',
    borderRadius: '50%',
    position: 'absolute',
    left: '-0.5em',
    top: '5px',
  },
})
