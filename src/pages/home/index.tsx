import Head from 'next/head'
import { DefaultContainer, MenuContainer, MenuItem } from './styles'
import { FaHamburger } from 'react-icons/fa'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Drulim | Receitas</title>
      </Head>
      <DefaultContainer>
        <MenuContainer>
          <Link href={'/'}>
            <MenuItem>
              <FaHamburger size={24} />
            </MenuItem>
            <p>Lanches</p>
          </Link>
          <MenuItem>
            <FaHamburger size={24} />
          </MenuItem>
          <MenuItem>
            <FaHamburger size={24} />
          </MenuItem>
          <MenuItem>
            <FaHamburger size={24} />
          </MenuItem>
          <MenuItem>
            <FaHamburger size={24} />
          </MenuItem>
          <MenuItem>
            <FaHamburger size={24} />
          </MenuItem>
        </MenuContainer>
      </DefaultContainer>
    </>
  )
}
