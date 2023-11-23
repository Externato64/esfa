import { storages } from '@/storages';
import { Provider, observer } from 'mobx-react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle, esfaTheme } from '@/styles';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Hooks } from '@/hooks';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider {...storages} >
      <ThemeProvider
        theme={esfaTheme}
      >
      <Head>
          <meta name="description" content="Website administrativo para o app EsfaCX" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hooks>
          <Component {...pageProps} />
      </Hooks>
      </ThemeProvider>
      <GlobalStyle />
      <ToastContainer />
    </Provider>
  );
}

export default observer(App);