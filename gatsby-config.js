module.exports = {
  siteMetadata: {
    title: `JAMConf in Ukraine`,
    description: `The first JAMstack conference in Ukraine`,
    author: `@alexandrtovmach`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `JAMConf_UA`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
  ],
}
