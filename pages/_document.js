import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

export default class Doc extends Document {
  render () {
    // styles
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    // fonts
    const fonts = <script type="text/javascript" src="//fast.fonts.net/jsapi/889fd395-7d38-47c6-b3da-f01e384df9a5.js"></script>

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
    transition: background-color .6s ease;
    background-color: #222;
    color: white;
  }
  .links {
    display: none;

    &:last-child {
      margin-bottom: 7rem;
    }
  }
`
