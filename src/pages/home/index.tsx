import Head from 'next/head'
import Image from 'next/image'
import boloCenoura from '../../assets/recipes/boloLaranja.jpg'
import pizza from '../../assets/recipes/pizza.jpg'
import macarrao from '../../assets/recipes/macarrao.jpg'
import {
  DefaultContainer,
  HighlightsContainer,
  MenuContainer,
  MenuItem,
} from './styles'

// Game Icons
import {
  GiCupcake,
  GiBeerStein,
  GiHamburger,
  GiSaucepan,
  GiHotMeal,
  GiNoodles,
} from 'react-icons/gi'

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
              <GiBeerStein size={24} />
            </MenuItem>
            <p>Bebidas</p>
          </Link>
          <Link href={'/'}>
            <MenuItem>
              <GiHamburger size={24} />
            </MenuItem>
            <p>Lanches</p>
          </Link>
          <Link href={'/'}>
            <MenuItem>
              <GiSaucepan size={24} />
            </MenuItem>
            <p>Molhos</p>
          </Link>
          <Link href={'/'}>
            <MenuItem>
              <GiNoodles size={24} />
            </MenuItem>
            <p>Massas</p>
          </Link>
          <Link href={'/'}>
            <MenuItem>
              <GiHotMeal size={24} />
            </MenuItem>
            <p>Entradas</p>
          </Link>
          <Link href={'/'}>
            <MenuItem>
              <GiCupcake size={24} />
            </MenuItem>
            <p>Doces</p>
          </Link>
        </MenuContainer>

        <HighlightsContainer>
          <div className="mainItem">
            <Link href="recipe">
              <Image src={boloCenoura} alt="" placeholder="blur"></Image>
              <span>Bolo de Cenoura</span>
            </Link>
          </div>
          <div className="secondaryItemContainer">
            <Link href="recipe">
              <div className="secondaryItem">
                <Image src={pizza} alt="" placeholder="blur"></Image>
                <span>Massa de Pizza</span>
              </div>
            </Link>
            <Link href="recipe">
              <div className="secondaryItem">
                <Image src={macarrao} alt="" placeholder="blur"></Image>
                <span>Macarronada Suculenta</span>
              </div>
            </Link>
          </div>
        </HighlightsContainer>
      </DefaultContainer>
    </>
  )
}
