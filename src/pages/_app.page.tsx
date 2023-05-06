// import { getCssText } from '@/styles'

import type { AppProps } from 'next/app'
import Router from 'next/router'
import { globalStyles } from '@/styles/global'
import Header from '../components/header'
import Footer from '@/components/footer'

import { AuthProvider } from '../contexts/AuthContext'

import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

globalStyles()

// Customizado
interface MyAppProps extends AppProps {
  isLoginPage: boolean
}

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }: MyAppProps) {
  const { isLoginPage } = pageProps
  return (
    <>
      <AuthProvider>
        {/* Renderiza o header apenas se a página atual não for a de login */}
        {!isLoginPage && <Header />}
        <Component {...pageProps} />
        {!isLoginPage && <Footer />}
      </AuthProvider>
    </>
  )
}

App.defaultProps = {
  isLoginPage: false, // Define isLoginPage como false por padrão
}
