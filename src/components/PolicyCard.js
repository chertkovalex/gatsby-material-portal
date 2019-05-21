import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

import Title from './Title';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    width: '100%',
    minWidth: 500,
    margin: 20
  },
});

export default function PolicyCard(data) {
  const classes = useStyles();

  const { number, plan, startDate, lastModalPremium, sumAssured } = data;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" gutterBottom align="right">
          {number}
        </Typography>
        <Typography component="h1" variant="h6" color="primary" align="right" gutterBottom>
          {plan}
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="body2" display="block" gutterBottom>
              Start Date
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body2" display="block" gutterBottom align="right">
              {startDate}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" display="block" gutterBottom>
              Last modal premium
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" display="block" gutterBottom align="right">
              {lastModalPremium}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" display="block" gutterBottom>
              Sum assured
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" display="block" gutterBottom align="right">
              {sumAssured}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
