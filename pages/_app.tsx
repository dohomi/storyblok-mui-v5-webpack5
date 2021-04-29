import { useEffect } from 'react'
import { CacheProvider } from '@emotion/react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../components/theme/theme'
import createCache from '@emotion/cache'

export const cache = createCache({ key: 'css', prepend: true })

function MyApp({ Component, pageProps }: AppProps) {
  // You can optionally pass the `user` prop from pages that require server-side
  // rendering to prepopulate the `useUser` hook.

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    <CacheProvider value={cache}>
      <Head>
        <title>CHredit - </title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700;800&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
