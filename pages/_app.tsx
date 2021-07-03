import { useEffect } from 'react'
import type { AppProps } from 'next/app'

import 'styles/globals.css'
import 'styles/ionicTheme.css'

import { defineCustomElements as ionDefineCustomElements } from '@ionic/core/loader'
/* Core CSS required for Ionic components to work properly */
import '@ionic/core/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/core/css/normalize.css'
import '@ionic/core/css/structure.css'
import '@ionic/core/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/core/css/padding.css'
import '@ionic/core/css/float-elements.css'
import '@ionic/core/css/text-alignment.css'
import '@ionic/core/css/text-transformation.css'
import '@ionic/core/css/flex-utils.css'
import '@ionic/core/css/display.css'

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    ionDefineCustomElements(window)
  })
  return <Component {...pageProps} />
}

export default App
