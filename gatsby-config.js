module.exports = {
  siteMetadata: {
    title: "masterducks",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
