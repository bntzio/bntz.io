import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

export default class Doc extends Document {
  render() {
    // styles
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    // fonts
    const fonts = <script type="text/javascript" src="//fast.fonts.net/jsapi/c703185d-fd95-48c6-8ad0-98c9346ad4ba.js"></script>

    return (
      <html>
        <Head>
          <title>Enrique Benitez - Digital Maker</title>
          {normalize}
          {globalStyles}
          {styleTags}
          {fonts}
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
