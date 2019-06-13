import React from 'react';
import { Link } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Typography from '@material-ui/core/Typography';

import useNewsData from '../hooks/NewsData';

const useStyles = makeStyles(theme => ({
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function NewsList() {
  const newsData = useNewsData();
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        Last News
      </Typography>
      <div className={classes.demo}>
        <List>
          {newsData.map(({ node }) => {
            const { excerpt, frontmatter, id, fields } = node;
            const { title } = frontmatter;
            return (
              <ListItem key={id}>
                <ListItemText primary={title} secondary={excerpt} />
                <ListItemSecondaryAction>
                  <Link to={fields.slug}>
                    <IconButton edge="end" aria-label="More">
                      <MoreHorizIcon />
                    </IconButton>
                  </Link>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </div>
    </>
  );
}
