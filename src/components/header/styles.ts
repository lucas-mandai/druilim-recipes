import { styled } from '@/styles'

export const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2.5rem',
  boxShadow: '2px 2px 2px rgb(0, 0, 0 , 0.1)',
  marginBottom: '2rem',
  backgroundColor: 'rgb(255, 255, 255)',

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
})

export const InputSearchContainer = styled('form', {
  svg: {},
})

export const AvatarContainer = styled('div', {
  cursor: 'pointer',

  img: {
    borderRadius: '50%',
    objectFit: 'cover',
  },
})
