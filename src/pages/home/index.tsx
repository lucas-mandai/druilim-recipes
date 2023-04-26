import Head from 'next/head'
import Image from 'next/image'
import boloCenoura from '../../assets/recipes/boloLaranja.jpg'
import {
  DefaultContainer,
  HighlightsContainer,
  MenuContainer,
  MenuItem,
} from './styles'
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
            <p>Bebidas</p>
          </Link>
          <Link href={'/'}>
            <MenuItem>
              <FaHamburger size={24} />
            </MenuItem>
            <p>Lanches</p>
          </Link>
          <Link href={'/'}>
            <MenuItem>
              <FaHamburger size={24} />
            </MenuItem>
            <p>Lanches</p>
          </Link>
          <Link href={'/'}>
            <MenuItem>
              <FaHamburger size={24} />
            </MenuItem>
            <p>Lanches</p>
          </Link>
          <Link href={'/'}>
            <MenuItem>
              <FaHamburger size={24} />
            </MenuItem>
            <p>Lanches</p>
          </Link>
          <Link href={'/'}>
            <MenuItem>
              <FaHamburger size={24} />
            </MenuItem>
            <p>Lanches</p>
          </Link>
        </MenuContainer>

        <HighlightsContainer>
          <div className="mainItem">
            <Link href="">
              <Image src={boloCenoura} alt="" placeholder="blur"></Image>
              <span>Bolo de Cenoura</span>
            </Link>
          </div>
          <div className="secondaryItemContainer">
            <div className="secondaryItem">
              <Image src="" alt=""></Image>
            </div>
            <div className="secondaryItem">
              <Image src="" alt=""></Image>
            </div>
          </div>
        </HighlightsContainer>
      </DefaultContainer>
    </>
  )
}
