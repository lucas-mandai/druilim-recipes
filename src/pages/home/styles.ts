import { styled } from '@/styles'

export const DefaultContainer = styled('div', {
  maxWidth: '1080px',
  margin: '0 auto',
  padding: '15px',
})

export const MenuContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',

  a: {
    textAlign: 'center',
  },
})

export const MenuItem = styled('div', {
  width: '60px',
  height: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  background: 'white',
  boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)',
  marginBottom: '0.5rem',

  svg: {
    color: '$blueTheme',
  },
})

export const HighlightsContainer = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3rem',
  width: '100%',
  height: '100%',
  marginTop: '2.5rem',

  '.mainItem': {
    minWidth: '40rem',
    height: '400px',
    position: 'relative',
    borderRadius: '8px',
    boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.2)',

    img: {
      borderRadius: '8px',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'contrast(0.8)',
    },
    span: {
      position: 'absolute',
      top: '80%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '2rem',
      textAlign: 'center',
      textTransform: 'uppercase',
    },
  },

  '.secondaryItemContainer': {
    minWidth: '20rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '2.6rem',

    '.secondaryItem': {
      height: '10rem',
      borderRadius: '8px',
      boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.2)',

      img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'contrast(0.8)',
        borderRadius: '8px',
      },
      span: {
        fontWeight: 'bold',
      },
    },
  },
})
