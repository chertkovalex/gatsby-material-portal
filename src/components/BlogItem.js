import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  paper: {
    minHeight: 240,
    width: '100%',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const BlogItem = props => {
  const { data } = props;
  const { excerpt: description, fields, frontmatter } = data;
  const { date, title } = frontmatter;
  const { slug } = fields;
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Order
          </Button>
          <Button size="small" color="primary" onClick={() => navigate(slug)}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

BlogItem.propTypes = {
  data: PropTypes.shape({
    excerpt: PropTypes.any,
    fields: PropTypes.object,
    frontmatter: PropTypes.object,
  }),
};

export default BlogItem;
