import Image from 'next/image'
import logoDrulim from '../../assets/drulimLogo.png'
import Link from 'next/link'
import {
  AvatarContainer,
  HeaderContainer,
  InputSearchContainer,
  SearchContainerMobile,
} from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { BiSearchAlt } from 'react-icons/bi'

export default function Header() {
  return (
    <HeaderContainer>
      <SearchContainerMobile>
        <input type="text" placeholder="Pesquisar" />
      </SearchContainerMobile>
      <button className="searchButtonMobile">
        <BiSearchAlt size={24} />
      </button>
      <Link href="/">
        <Image src={logoDrulim} height={24} alt="" placeholder="blur" />
      </Link>
      <InputSearchContainer>
        <input type="search" placeholder="Procure uma receita" />
        <button type="submit">
          <MagnifyingGlass size={14} />
        </button>
      </InputSearchContainer>
      <AvatarContainer>
        <Image
          src="https://github.com/lucas-mandai.png"
          width={36}
          height={36}
          alt=""
        ></Image>
      </AvatarContainer>
    </HeaderContainer>
  )
}
