import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

export const cache = createCache({ key: 'css', prepend: true })

const themeStatic = createMuiTheme({
  palette: { mode: 'light' },
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        bar: {
          backgroundColor: 'black'
        }
      }
    }
  }
})

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={themeStatic}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
