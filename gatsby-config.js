module.exports = {
  siteMetadata: {
    title: `Nic found a Jem`,
    description: `Wedding website for the wedding of Nicolaos and Jemima`,
    author: `@nicmosc`,
    kadologLink: `https://www.kadolog.com/fr/list/liste-de-mariage-de-nicolaos-jemima`,
    pictime1: `https://charliebillie.pic-time.com/-jemimanicolaos6/gallery`,
    pictime2: `https://charliebillie.pic-time.com/-jemimanicolaos/gallery`,
    pictime3: `https://charliebillie.pic-time.com/-jemimanicolao/gallery`,
    video: `https://youtu.be/h6NLQYojYOE`,
  },
  pathPrefix: '/wedding-website',
  plugins: [
    `gatsby-plugin-transition-link`,
    'gatsby-plugin-eslint',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/icons`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/flower.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        autoLabel: true,
      },
    },
    {
      resolve: 'gatsby-plugin-copy-files',
      options: {
        source: `${__dirname}/static/`,
        destination: '',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
