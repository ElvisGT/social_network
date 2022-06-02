import '../styles/globals.css'

import type { AppProps } from 'next/app';
import {Provider} from 'react-redux';
import { store } from '../app/store';
import { ThemeProvider } from "next-themes";
import { Layout } from '../containers/Layout';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );

}

export default MyApp;
