import Head from 'next/head'
import Image from 'next/image'
import boloCenoura from '../../assets/recipes/boloLaranja.jpg'
import pizza from '../../assets/recipes/pizza.jpg'
import macarrao from '../../assets/recipes/macarrao.jpg'
import {
  DefaultContainer,
  HighlightsContainer,
  MenuContainer,
  // MenuItem,
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

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

export default function Home() {
  return (
    <>
      <Head>
        <title>Drulim | Receitas</title>
      </Head>
      <DefaultContainer>
        <MenuContainer>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            loop={true}
            navigation={false}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link href="/">
                <div className="sld">
                  <GiBeerStein size={30} />
                  <p>Bebidas</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/">
                <div className="sld">
                  <GiHamburger size={30} />
                  <p>Hamburger</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/">
                <div className="sld">
                  <GiSaucepan size={30} />
                  <p>Molhos</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/">
                <div className="sld">
                  <GiNoodles size={30} />
                  <p>Massas</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/">
                <div className="sld">
                  <GiHotMeal size={30} />
                  <p>Entradas</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/">
                <div className="sld">
                  <GiCupcake size={30} />
                  <p>Doces</p>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
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
                <div>Massa de Pizza</div>
              </div>
            </Link>
            <Link href="recipe">
              <div className="secondaryItem">
                <Image src={macarrao} alt="" placeholder="blur"></Image>
                <div>Macarronada Suculenta</div>
              </div>
            </Link>
          </div>
        </HighlightsContainer>
      </DefaultContainer>
    </>
  )
}
