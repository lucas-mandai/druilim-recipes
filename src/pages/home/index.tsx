import Head from 'next/head'
import { DefaultContainer } from './styles'

export default function Home() {
  return (
    <>
      <Head>
        <title>Drulim | Receitas</title>
      </Head>
      <DefaultContainer>
        <h1>Hello World</h1>
      </DefaultContainer>
    </>
  )
}
