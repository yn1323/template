import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'src/store'
import { BrowserRouter } from 'react-router-dom'
import Index from 'src/page/Index'
import registerServiceWorker from 'src/reagisterServiceWorker'
import 'src/asset/scss/index.scss'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import i18n from 'src/locales'
import { I18nextProvider } from 'react-i18next'
import { initAd } from 'src/helper'

const run = (isEmulator = true) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#208DC3',
        contrastText: '#888',
        dark: '#eee',
        light: '#eee',
      },
      secondary: {
        main: '#F6D580',
        contrastText: '#888',
        dark: '#eee',
        light: '#eee',
      },
    },
  })
  ReactDOM.render(
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <MuiThemeProvider theme={theme}>
          <Provider store={store}>
            <BrowserRouter>
              <Index />
            </BrowserRouter>
          </Provider>
        </MuiThemeProvider>
      </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')
  )
  registerServiceWorker()
   if (isEmulator) {
    initAd()
  }
}

// eslint-disable-next-line no-prototype-builtins
if (window.hasOwnProperty('cordova')) {
  document.addEventListener('deviceready', () => run(true), false)
} else {
  run(false)
}
