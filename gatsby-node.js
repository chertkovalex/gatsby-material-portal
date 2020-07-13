/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  // Added support for '\/[a-z]{2}' in order to catch also pages behind the locale prefix
  // For example: /it/app/profile etc
  if (page.path.match(/^\/[a-z]{2}\/app|^\/app/)) {
    if (page.path.match(/^\/app/)) {
      page.matchPath = `/app/*`;
    }
    if (page.path.match(/^\/[a-z]{2}\/app/)) {
      const localePrefix = page.path.slice(0, 3);
      page.matchPath = `${localePrefix}/app/*`;
    }

    // Update the page.
    createPage(page);
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      // eslint-disable-next-line no-console
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { id } = node;

      createPage({
        path: node.fields.slug,
        component: blogPostTemplate,
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
