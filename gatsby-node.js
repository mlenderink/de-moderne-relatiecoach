const _ = require("lodash");
const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  createPage({
    path: "/",
    component: path.resolve(`src/templates/index-page.js`),
    context: {},
  });
};
