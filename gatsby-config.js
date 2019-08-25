module.exports = {
  siteMetadata: {
    title: 'Enrique Benitez',
    name: 'bntz.io',
    siteUrl: 'https://bntz.io',
    description: 'Enrique Benitez is a full-stack developer and maker.',
    hero: {
      heading: `Hi, I'm Enrique. I make stuff on the Internet.`,
      maxWidth: 600
    },
    social: [
      {
        name: 'twitter',
        url: 'https://twitter.com/bntzio'
      },
      {
        name: 'github',
        url: 'https://github.com/bntzio'
      },
      {
        name: 'instagram',
        url: 'https://instagram.com/bntzio'
      }
    ]
  },
  plugins: [
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        basePath: '/blog'
      }
    }
  ]
}
