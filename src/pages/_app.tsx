import '../styles/globals.css'

import type { AppProps } from 'next/app';
import {Provider} from 'react-redux';
import { store } from '../app/store';
import Navbar from "../components/layout/Navbar";
import { ThemeProvider } from "next-themes";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );

}

export default MyApp;
