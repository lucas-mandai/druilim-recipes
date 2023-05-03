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
        color: '#303030',
        textAlign: 'center',
        position: 'absolute',
        bottom: '0',
        left: '50%',
        marginBottom: '-28px',
        transform: 'translate(-50%)',
        fontSize: '1rem',
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
    width: '65%',
    height: '24rem',
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
      // filter: 'brightness(1.2)',
      /* Adiciona um gradiente linear no fundo da imagem */
    },
    span: {
      width: '100%',
      background:
        'linear-gradient(to top, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 0) 100%)',
      position: 'absolute',
      bottom: '-36px',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1.8rem',
      textAlign: 'center',
      textTransform: 'uppercase',
      borderRadius: '0  0 8px 8px',
      padding: '1rem',
    },
  },

  // '.mainItem::before': {
  //   content: '',
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   width: '100%',
  //   height: '100%',
  //   background: 'linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0))',
  //   zIndex: 1,
  // },

  '.secondaryItemContainer': {
    width: 'calc(35% - 3rem)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    '@media (max-width: 768px)': {
      width: '100%',
      flexDirection: 'row',
      gap: '1rem',
    },

    '.secondaryItem': {
      width: '100%',
      height: '200px',
      borderRadius: '8px',
      position: 'relative',

      '@media (max-width: 768px)': {
        height: '170px',
      },

      img: {
        width: '100%',
        height: '80%',
        objectFit: 'cover',
        filter: 'contrast(0.8)',
        borderRadius: '8px',
        boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.2)',
      },

      div: {
        display: 'flex',
        position: 'absolute',
        fontWeight: 'bold',
      },
    },
  },
})

export const SectionTitle = styled('div', {
  display: 'flex',
  position: 'relative',
  textAlign: 'center',
  margin: '2rem 0',
  justifyContent: 'center',
  fontSize: '1.8rem',
  fontWeight: 'bold',
  color: '$blueTheme',
  textTransform: 'uppercase',
})

export const RecentRecipes = styled('section', {
  position: 'relative',
  display: 'flex',
  gap: '3rem',
  flexWrap: 'wrap',

  // div: {
  //   height: '11.25rem',
  //   position: 'relative',
  //   borderRadius: '8px',
  //   flex: '1',
  //   minWidth: '100px',
  //   boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.2)',
  // },
  '.swiper-slide': {
    height: '11.25rem',
    position: 'relative',
    borderRadius: '8px',
  },
  '.swiper-button-prev::after': {
    background: '$blueTheme',
    color: '$white',
    fontSize: '1rem',
    borderRadius: '50%',
    padding: '0.6rem 0.8rem',
  },
  '.swiper-button-next::after': {
    background: '$blueTheme',
    color: '$white',
    fontSize: '1rem',
    borderRadius: '50%',
    padding: '0.6rem 0.8rem',
  },
  img: {
    objectFit: 'cover',
    borderRadius: '8px',
  },

  '.title': {
    borderRadius: '0 0 8px 8px',
    position: 'relative',
    transform: 'translateY(350%)',
    color: '$white',
    zIndex: 999,
    width: '100%',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1rem',
    background:
      'linear-gradient(to top, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 0) 100%)',
  },
})
