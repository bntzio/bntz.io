import React from 'react'
/** custom imports */
import Head from 'heads/about'
import GlobalStyles from 'styles/global'
import Layout from 'layouts/about'
import About from 'components/About'

export default () => (
  <>
    <Head />
    <GlobalStyles />
    <main>
      <Layout>
        <About />
      </Layout>
    </main>
  </>
)
