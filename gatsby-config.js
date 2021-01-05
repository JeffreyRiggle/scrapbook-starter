/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
    plugins: [
      {
        resolve: `gatsby-transformer-json`,
        options: {
          typeName: ({ node, object, isArray }) => object.image ? 'img' : null
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `data`,
          path: `${__dirname}/src/data/`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `imgs`,
          path: `${__dirname}/src/img/`,
        },
      },
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
    ],
  }
  