import { styled } from '@/styles'

export const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2.5rem',
  boxShadow: '2px 2px 2px rgb(0, 0, 0 , 0.1)',
  marginBottom: '2rem',

  input: {
    borderRadius: '25px 0 0 25px',
    padding: '0.5rem 2rem',
    border: '1px solid $blueTheme',
    outline: 'none',
    color: '$blueTheme',
    fontSize: '$sm',
  },
  button: {
    borderRadius: '0 25px 25px 0',
    padding: '0.5rem 2rem',
    border: '1px solid $blueTheme',
    outline: 'none',
    color: '$blueTheme',
  },
})

export const InputContainer = styled('header', {
  svg: {
    marginLeft: '-30px',
    paddingTop: '-80px',
  },
})
