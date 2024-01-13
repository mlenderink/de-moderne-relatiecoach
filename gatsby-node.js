const _ = require("lodash");
const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  createPage({
    path: "/",
    component: path.resolve(`src/templates/index-page.js`),
    context: {},
  });

  createPage({
    path: "/moderne-relatie",
    component: path.resolve(`src/templates/moderne-relatie-page.js`),
    context: {},
  });

  createPage({
    path: "/aanbod",
    component: path.resolve(`src/templates/aanbod-page.js`),
    context: {},
  });

  createPage({
    path: "/mijn-verhaal",
    component: path.resolve(`src/templates/mijn-verhaal-page.js`),
    context: {},
  });

  createPage({
    path: "/contact",
    component: path.resolve(`src/templates/contact-page.js`),
    context: {},
  });
};
