module.exports = {
  siteMetadata: {
    title: "De moderne relatiecoach",
    description:
      "De moderne relatiecoach is een coachingspraktijk voor mensen die worstelen met hun relatie. Ik help je om je relatie te verbeteren en jezelf te ontwikkelen.",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    // {
    //   resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
    //   options: {
    //     develop: true, // Activates purging in npm run develop
    //     purgeOnly: ["/all.sass"], // applies purging only on the bulma css file
    //   },
    // }, // must be after other CSS plugins
    "gatsby-plugin-netlify",
  ],
};
