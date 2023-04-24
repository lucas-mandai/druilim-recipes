import Image from 'next/image'
import logoDrulim from '../../assets/drulimLogo.png'
import { HeaderContainer, InputContainer } from './styles'
// import { MagnifyingGlass } from 'phosphor-react'

export default function Header() {
  return (
    <HeaderContainer>
      <Image src={logoDrulim} height={30} alt="" placeholder="blur" />
      <InputContainer>
        <input type="text" placeholder="Pesquisar" />
        <button type="submit">Pesquisar</button>
        {/* <MagnifyingGlass size={22} /> */}
      </InputContainer>
      <div>Avatar</div>
    </HeaderContainer>
  )
}
