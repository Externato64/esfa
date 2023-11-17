import Head from 'next/head'
import { Container } from './styles'
import { observer } from 'mobx-react-lite'
import { inject } from 'mobx-react'
import { Storage } from '@/types'

function Home() {
  return (
    <>
      <Head>
        <title>EsfaCX</title>
        <meta name="description" content="Website administrativo para o app EsfaCX" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
      </Container>
    </>
  )
}

export default inject(Storage.AUTH)(observer(Home));