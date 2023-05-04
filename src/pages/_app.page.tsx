// import { getCssText } from '@/styles'

import type { AppProps } from 'next/app'

import { globalStyles } from '@/styles/global'
import Header from '../components/header'
import Footer from '@/components/footer'

globalStyles()

// Customizado
interface MyAppProps extends AppProps {
  isLoginPage: boolean
}

export default function App({ Component, pageProps }: MyAppProps) {
  const { isLoginPage } = pageProps
  return (
    <>
      {!isLoginPage && <Header />}{' '}
      {/* Renderiza o header apenas se a página atual não for a de login */}
      {/* <Header /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

App.defaultProps = {
  isLoginPage: false, // Define isLoginPage como false por padrão
}
