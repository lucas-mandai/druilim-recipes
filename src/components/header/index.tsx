import Image from 'next/image'
import logoDrulim from '../../assets/drulimLogo.png'
import Link from 'next/link'
import {
  AvatarContainer,
  HeaderContainer,
  InputSearchContainer,
  SearchContainerMobile,
} from './styles'

import { BiSearchAlt } from 'react-icons/bi'
import { useState } from 'react'

export default function Header() {
  const [showSearchContainerMobile, setShowSearchContainerMobile] =
    useState(false)

  function handleClick() {
    setShowSearchContainerMobile(!showSearchContainerMobile)
  }

  return (
    <HeaderContainer>
      {showSearchContainerMobile && (
        <SearchContainerMobile>
          <input type="text" placeholder="Pesquisar" />
          <button type="submit">
            <BiSearchAlt size={14} />
          </button>
        </SearchContainerMobile>
      )}
      <button onClick={handleClick} className="searchButtonMobile">
        <BiSearchAlt size={24} />
      </button>
      <Link href="/">
        <Image src={logoDrulim} height={24} alt="" placeholder="blur" />
      </Link>
      <InputSearchContainer>
        <input type="search" placeholder="Procure uma receita" />
        <button type="submit">
          <BiSearchAlt size={14} />
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
