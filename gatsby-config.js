module.exports = {
  siteMetadata: {
    title: `Noir Fatale Dark Electronics`,
    description: `Noir Fatale is the dark electronic music project with elements of trance and retro-noir mood.`,
    author: `Michal Antczak`,
    keywords: `music, dark house, dark electronic music, new retro, noir fatale, michal antczak `,
    image: "/src/images/noirfatale.jpg",
    siteUrl: "https://www.noirfatale.com",
    robots: `index, follow`,
    image: `https://noirfatale.s3.eu-west-3.amazonaws.com/img/noirfatale.jpg`,
    canonicalUrl: `https://www.noirfatale.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-132849357-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Noir Fatale Dark Electronics`,
        short_name: `Noir Fatale`,
        start_url: `/`,
        background_color: `#2d1d04`,
        theme_color: `#2d1d04`,
        display: `minimal-ui`,
        icon: `src/images/moth.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
