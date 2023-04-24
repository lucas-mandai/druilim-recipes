// import { getCssText } from '@/styles'

import type { AppProps } from 'next/app'
import Head from 'next/head'

import { globalStyles } from '@/styles/global'
import Header from '../components/header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        /> */}
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
