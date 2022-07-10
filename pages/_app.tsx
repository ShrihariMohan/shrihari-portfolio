import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from "nextjs-progressbar";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as TP } from 'next-themes'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <TP>
        <NextNProgress color='#0891b2' options={{ showSpinner: false, easing: "ease" }} />
        <Component {...pageProps} />
        </TP>
      </ThemeProvider>
    </>
  )
}

export default MyApp
