import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from "nextjs-progressbar";

import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <NextNProgress color='#f97316' options={{ showSpinner: false, easing: "ease" }} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
