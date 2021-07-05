import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { RecoilRoot } from 'recoil'

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
  return (
    <RecoilRoot>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#68d391" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="icons/icon-192x192.png"
        />
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default App
