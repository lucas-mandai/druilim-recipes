import { styled } from '@/styles'

export const DefaultContainer = styled('div', {
  maxWidth: '1080px',
  margin: '0 auto',
  padding: '15px',
})

export const MenuContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
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

  svg: {
    color: '$blueTheme',
  },
})
