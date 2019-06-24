import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Settings = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid item className={classes.container}>
        <h1>
          <FormattedMessage id="Settings" /> - Only for Admins
        </h1>
      </Grid>
    </Grid>
  );
};

Settings.propTypes = {
  intl: PropTypes.shape({
    locale: PropTypes.string,
  }),
};

export default Settings;
