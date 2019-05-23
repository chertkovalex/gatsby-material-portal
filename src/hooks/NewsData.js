import { graphql, useStaticQuery } from 'gatsby';

const useNewsData = () => {
  const newsData = useStaticQuery(
    graphql`
      query NEWS_DATA_QUERY {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              id
              excerpt(pruneLength: 250)
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
              }
            }
          }
        }
      }
    `,
  );

  return newsData.allMarkdownRemark.edges;
};

export default useNewsData;
