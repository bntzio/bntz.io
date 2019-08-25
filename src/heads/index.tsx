import React from 'react'
import Helmet from 'react-helmet'

export default () => (
  <Helmet
    title="Enrique Benitez - Full-Stack Developer and Digital Maker"
    link={[
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Work+Sans:300,400,500|Montserrat:500&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://cloud.typography.com/7471216/6094192/css/fonts.css'
      }
    ]}
  />
)
