import Head from 'next/head'
import Image from 'next/image'
import pizza from '../../assets/recipes/pizza.jpg'
import macarrao from '../../assets/recipes/macarrao.jpg'
import arrozBrocolis from '../../assets/recipes/arrozBrocolis.jpeg'
import {
  DefaultContainer,
  HighlightsContainer,
  MenuContainer,
  RecentRecipes,
  SectionTitle,
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
import { AuthContext } from '@/contexts/AuthContext'
import { useContext, useEffect } from 'react'
import { api } from '@/services/api'

export default function Home() {
  // const { user } = useContext(AuthContext)

  useEffect(() => {
    api.get('/users')
  }, [])

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
              <Image src={arrozBrocolis} alt="" placeholder="blur"></Image>

              <span>Arroz com Brocolis</span>
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

        <SectionTitle>Últimas Receitas</SectionTitle>

        <RecentRecipes>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            // pagination={{
            //   clickable: true,
            // }}
            loop={true}
            navigation={true}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiperSecond"
          >
            <SwiperSlide>
              <Image
                src="https://www.foodiesfeed.com/wp-content/uploads/2015/09/sushi-yam-california-rolls.jpg"
                fill
                alt={''}
              ></Image>
              <span className="title">Macksushi Filadelfia</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://www.foodiesfeed.com/wp-content/uploads/2019/07/cinnamon-and-maple-syrup-cake.jpg"
                fill
                alt={''}
              ></Image>
              <span className="title">Bolo com Aveia e Passas</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://www.foodiesfeed.com/wp-content/uploads/2019/01/orange-cheese-pancakes.jpg"
                fill
                alt={''}
              ></Image>
              <span className="title">Panquecas De Queijo De Laranja</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://www.foodiesfeed.com/wp-content/uploads/2019/01/banana-oat-chocolate-cookies.jpg"
                fill
                alt={''}
              ></Image>
              <span className="title">
                Cookies de banana e aveia com chocolate
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://www.foodiesfeed.com/wp-content/uploads/2016/05/orange-juice-drink-with-mint.jpg"
                fill
                alt={''}
              ></Image>
              <span className="title">
                Bebida de suco de laranja com hortelã
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://www.foodiesfeed.com/wp-content/uploads/2019/01/apple-pie.jpg"
                fill
                alt={''}
              ></Image>
              <span className="title">Torta de maçã caseira</span>
            </SwiperSlide>
          </Swiper>
        </RecentRecipes>
      </DefaultContainer>
    </>
  )
}
