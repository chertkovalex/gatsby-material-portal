import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Deposits from './Deposits';
import Orders from './Orders';
import UserDetails from './UserDetails';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard({ isAuth }) {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
      <Grid container spacing={1}>
        {/* User Details */}
        {isAuth && (
          <Grid item xs={12} md={9} lg={9}>
            <Paper className={classes.paper}>
              <UserDetails />
            </Paper>
          </Grid>
        )}

        {/* Recent Deposits */}
        <Grid item xs={12} md={9} lg={6}>
          <Paper className={fixedHeightPaper}>
            <Deposits />
          </Paper>
        </Grid>

        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
  );
}

Dashboard.propTypes = {
  isAuth: PropTypes.bool,
};
