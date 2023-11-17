import { storages } from '@/storages'
import { Provider, observer } from 'mobx-react'
import type { AppProps } from 'next/app'
import Login from './login'
import Head from 'next/head'
import { GlobalStyle } from '@/styles'

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider {...storages} >
      {/* <GoogleOAuthProvider
        clientId='144382331424-va97nu97c1bihklq3q91uadudhg1oi5r.apps.googleusercontent.com'
      > */}
      <Head>
          <meta name="description" content="Website administrativo para o app EsfaCX" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        storages.authStorage.authenticated ?
        <Component {...pageProps} />
        :
        <Login {...pageProps} />
      }
      <GlobalStyle />
    </Provider>
  )
}

export default observer(App);