// import { getCssText } from '@/styles'

import type { AppProps } from 'next/app'

import { globalStyles } from '@/styles/global'
import Header from '../components/header'
import Footer from '@/components/footer'

import { AuthProvider } from '../contexts/AuthContext'

globalStyles()

// Customizado
interface MyAppProps extends AppProps {
  isLoginPage: boolean
}

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
