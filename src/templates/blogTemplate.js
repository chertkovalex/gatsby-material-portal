/* eslint-disable react/no-danger */
import React from 'react';
import { graphql, navigate } from 'gatsby';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Template({
  // eslint-disable-next-line react/prop-types
  data, // this prop will be injected by the GraphQL query below.
}) {

  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  const { date, image, title } = frontmatter;

  const classes = useStyles();

  return (
    <Layout>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="600"
                  image={`${image.childImageSharp ? image.childImageSharp.fluid.src : image}`}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="p">
                    {date}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="div">
                    <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Order
                </Button>
                <Button size="small" color="primary" onClick={() => navigate('/blog')}>
                  Back to Blog
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        image {
          childImageSharp {
            fluid(maxHeight: 1500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
