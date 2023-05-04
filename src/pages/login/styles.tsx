import { styled } from '@/styles'

export const LoginContainer = styled('div', {
  background: '$bg',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const LoginCard = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  borderRadius: '8px',
  gap: '0.8rem',
  background: '$white',
  boxShadow: '2px 2px 2px rgb(0, 0, 0 , 0.1)',

  img: {
    width: '100px',
    height: 'auto',
    marginBottom: '1rem',
  },

  input: {
    width: '100%',
    borderRadius: '8px',
    border: '1px solid $gray',
    padding: '0.5rem',
    // background: '$white',
    outline: 'none',
  },

  button: {
    width: '100%',
    borderRadius: '8px',
    border: 'none',
    padding: '0.5rem',
    background: '$blueTheme',
    color: '$white',
    boxShadow: '2px 2px 2px rgb(0, 0, 0 , 0.1)',
  },
})
