import { styled } from '@/styles'

export const DefaultContainer = styled('div', {
  maxWidth: '1080px',
  margin: '0 auto',
  padding: '15px',
})

// export const MenuContainer = styled('div', {
//   display: 'flex',
//   justifyContent: 'space-around',

//   a: {
//     textAlign: 'center',
//   },
// })

export const MenuContainer = styled('div', {
  marginBottom: '2.5rem',
  // '.swiper-wrapper': {
  //   justifyContent: 'space-around',
  // },
  '.swiper': {
    height: '120px',
  },

  '.swiper-slide': {
    display: 'flex',
    justifyContent: 'space-around',

    '.sld': {
      position: 'relative',
      textAlign: 'center',
      fontSize: '18px',
      background: '#fff',
      width: '60px!important',
      height: '60px',
      borderRadius: '50%',
      color: '$blueTheme',
      boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)',

      svg: {
        position: 'absolute',
        left: '50%' /* centraliza horizontalmente */,
        top: '50%' /* centraliza verticalmente */,
        transform: 'translate(-50%, -50%)',
      },
      p: {
        textAlign: 'center',
        position: 'absolute',
        bottom: '0',
        left: '50%',
        marginBottom: '-28px',
        transform: 'translate(-50%)',
      },
    },
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
  gap: '3rem',
  width: '100%',
  height: '100%',
  flexWrap: 'wrap',
  justifyContent: 'center',

  '.mainItem': {
    width: '60%',
    height: 'auto',
    position: 'relative',
    borderRadius: '8px',
    boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.2)',

    '@media (max-width: 768px)': {
      width: '100%',
    },

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
    width: 'calc(40% - 3rem)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',

    '@media (max-width: 768px)': {
      width: '100%',
      flexDirection: 'row',
    },

    '.secondaryItem': {
      width: '100%',
      borderRadius: '8px',
      boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.2)',

      '@media (max-width: 768px)': {
        width: '50%',
      },

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
