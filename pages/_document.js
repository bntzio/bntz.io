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
    const googleFonts = <link href="https://fonts.googleapis.com/css?family=Neuton:300,400,400i" rel="stylesheet" />
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
          {googleFonts}
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
    text-rendering: optimizeLegibility;
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

  /* highlight.js (github gist theme) */
  .hljs {
    display: block;
    background: white;
    padding: 0.5em;
    color: #333333;
    overflow-x: auto;
  }
  
  .hljs-comment,
  .hljs-meta {
    color: #969896;
  }
  
  .hljs-string,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-strong,
  .hljs-emphasis,
  .hljs-quote {
    color: #df5000;
  }
  
  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-type {
    color: #a71d5d;
  }
  
  .hljs-literal,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-attribute {
    color: #0086b3;
  }
  
  .hljs-section,
  .hljs-name {
    color: #63a35c;
  }
  
  .hljs-tag {
    color: #333333;
  }
  
  .hljs-title,
  .hljs-attr,
  .hljs-selector-id,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo {
    color: #795da3;
  }
  
  .hljs-addition {
    color: #55a532;
    background-color: #eaffea;
  }
  
  .hljs-deletion {
    color: #bd2c00;
    background-color: #ffecec;
  }
  
  .hljs-link {
    text-decoration: underline;
  }
`
