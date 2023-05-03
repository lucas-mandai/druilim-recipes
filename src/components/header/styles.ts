import { styled } from '@/styles'

export const HeaderContainer = styled('header', {
  zIndex: '9999999',
  width: '100%',
  position: 'fixed',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2.5rem',
  boxShadow: '2px 2px 2px rgb(0, 0, 0 , 0.1)',
  marginBottom: '2rem',
  backgroundColor: 'rgb(255, 255, 255)',

  '.searchButtonMobile': {
    display: 'none',
    border: 'none',
    background: 'white',
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.2)',
    color: '$blueTheme',
    fontSize: '1.2rem',
    fontWeight: 'bold',

    '@media (max-width: 768px)': {
      display: 'block',
    },
  },
})

export const SearchContainerMobile = styled('div', {
  display: 'none',
  zIndex: '999',
  position: 'absolute',
  left: '0',
  top: '70px',
  height: '60px',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#f0f0f0',
  boxShadow: '2px 2px 2px rgb(0, 0, 0 , 0.1)',

  '@media (max-width: 768px)': {
    display: 'flex',
    // display: 'none',
  },

  input: {
    // height: '2.25rem',
    borderRadius: '25px 0 0 25px',
    padding: '0.5rem 1rem',
    border: '1px solid $blueTheme',
    outline: 'none',
    color: '$gray',
    fontSize: '$sm',
  },
  button: {
    // height: '2.25rem',
    borderRadius: '0 25px 25px 0',
    padding: '0.5rem 1rem',
    border: '1px solid $blueTheme',
    outline: 'none',
    color: 'white',
    borderLeft: 'none',
    background: '$blueTheme',

    '&:hover': {
      filter: 'contrast(0.9)',
    },
  },
})

export const InputSearchContainer = styled('form', {
  input: {
    // height: '2.25rem',
    borderRadius: '25px 0 0 25px',
    padding: '0.5rem 1rem',
    border: '1px solid $blueTheme',
    outline: 'none',
    color: '$blueTheme',
    fontSize: '$sm',
  },
  button: {
    // height: '2.25rem',
    borderRadius: '0 25px 25px 0',
    padding: '0.5rem 1rem',
    border: '1px solid $blueTheme',
    outline: 'none',
    color: 'white',
    borderLeft: 'none',
    background: '$blueTheme',

    '&:hover': {
      filter: 'contrast(0.9)',
    },
  },

  '@media (max-width: 768px)': {
    display: 'none',
  },
})

export const AvatarContainer = styled('div', {
  cursor: 'pointer',

  img: {
    borderRadius: '50%',
    objectFit: 'cover',
  },
})
