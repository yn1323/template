import { useEffect } from 'react'
import type { AppProps } from 'next/app'

import { RecoilRoot } from 'recoil'

import {
  ThemeProvider as MaterialUIThemeProvider,
  StylesProvider,
} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import 'styles/globals.css'
import { theme } from '@constant'

const App = ({ Component, pageProps }: AppProps) => {
  // Remove the server-side injected CSS.(https://material-ui.com/guides/server-rendering/)
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])
  return (
    <StylesProvider injectFirst>
      <MaterialUIThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          <CssBaseline />
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </StyledComponentsThemeProvider>
      </MaterialUIThemeProvider>
    </StylesProvider>
  )
}

export default App
