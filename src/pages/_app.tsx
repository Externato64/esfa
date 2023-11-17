import { storages } from '@/storages'
import { Provider, observer } from 'mobx-react'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import Login from './login'
import Head from 'next/head'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider {...storages} >
      <Head>
          <meta name="description" content="Website administrativo para o app EsfaCX" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        storages.authStorage.authenticated ?
        <Component className={`${roboto.className}`} {...pageProps} />
        :
        <Login className={`${roboto.className}`} {...pageProps} />
      }
    </Provider>
  )
}

export default observer(App);