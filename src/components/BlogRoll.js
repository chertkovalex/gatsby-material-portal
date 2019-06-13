import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import BlogItem from './BlogItem';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const BlogRoll = props => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      {posts &&
        posts.map(({ node: post }, i) => {
          const gridDefaultProps = {
            xs: 12,
          };
          const gridProps = i === 0 ? gridDefaultProps : { ...gridDefaultProps, sm: 6, lg: 4 };

          return (
            <Grid item {...gridProps} key={post.id}>
              <BlogItem data={post} imgHeight={i === 0 ? 250 : 140} />
            </Grid>
          );
        })}
    </Grid>
  );
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

// eslint-disable-next-line react/display-name
export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                image {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 92) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
