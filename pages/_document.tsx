import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

type Props = {
  styleTags: any
}

export default class MyDocument extends Document<Props> {
  static getInitialProps({ renderPage }: any) {
    const sheet = new ServerStyleSheet()

    const page = renderPage((App: any) => (props: any) =>
      sheet.collectStyles(<App {...props} />)
    )

    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#68d391" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="icons/icon-192x192.png"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
