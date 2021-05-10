module.exports = {
  siteMetadata: {
    title: "arif.me",
    description: `My personal portfolio`,
    author: `@sahidularif`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `arif.me`,
        short_name: `arif.me`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `minimal-ui`,
        icon: `src/assets/image/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};