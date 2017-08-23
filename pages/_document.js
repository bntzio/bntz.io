import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { rem, media } from './../utils/styleUtils'

export default class Doc extends Document {
  render () {
    // metas
    const viewport = <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    // styles
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    // fonts
    const fonts = <script type="text/javascript" src="//fast.fonts.net/jsapi/889fd395-7d38-47c6-b3da-f01e384df9a5.js"></script>
    // jquery
    const jquery = <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    // selection-sharer (https://github.com/xdamman/selection-sharer)
    const selectionSharerScripts = <script src="/static/assets/javascripts/selection-sharer.min.js"></script>
    const selectionSharerStyles = <link rel="stylesheet" href="/static/assets/stylesheets/selection-sharer.min.css" />

    return (
      <html>
        <Head>
          <title>Enrique Benitez - Digital Maker</title>
          {normalize}
          {viewport}
          {globalStyles}
          {styleTags}
          {selectionSharerStyles}
          {fonts}
          {jquery}
          {selectionSharerScripts}
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
      ${rem('margin-bottom', 112)};

      ${media.largeDesktop`
        margin-bottom: 0;
      `}
    }
  }
`
