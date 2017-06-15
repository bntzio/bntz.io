import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

export default class Doc extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html>
        <Head>
          <title>Enrique Benitez - Digital Maker</title>
          {normalize}
          {globalStyles}
          {styleTags}
        </Head>
        <body>
          <main>
            {main}
          </main>
          <NextScript />
        </body>
      </html>
    )
  }
}

const normalize = injectGlobal`
  ${styledNormalize}
`

const globalStyles = injectGlobal`
  body {
    background-color: #222;
    color: white;
  }
`
