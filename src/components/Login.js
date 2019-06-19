import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { FormattedMessage, injectIntl } from 'react-intl';

import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { handleLogin, isLoggedIn } from '../services/auth';
import { getLocalePrefix } from '../locale';

const useStyles = makeStyles(theme => ({
  loginContainer: {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Login = ({ intl }) => {
  const [username, setUsername] = React.useState('digital');
  const [password, setPassword] = React.useState('digital');
  const localePrefix = getLocalePrefix(intl.locale);

  const classes = useStyles();

  const handleSubmit = event => {
    event.preventDefault();
    handleLogin({ username, password });
  };

  if (isLoggedIn()) {
    navigate(`${localePrefix}/app/user-details`);
  }

  return (
    <Grid container spacing={1}>
      <Grid item className={classes.loginContainer}>
      <h1>
        <FormattedMessage id="Log in" />
      </h1>
      <form
        method="post"
        onSubmit={event => {
          handleSubmit(event);
          navigate(`${localePrefix}/`);
        }}
      >
        <TextField
          defaultValue="digital"
          label={intl.formatMessage({ id: 'Username' })}
          margin="normal"
          name="username"
          onChange={event => setUsername(event.target.value)}
          placeholder="Default: digital"
        />
        <br />
        <TextField
          autoComplete="current-password"
          defaultValue="digital"
          label={intl.formatMessage({ id: 'Password' })}
          margin="normal"
          name="password"
          onChange={event => setPassword(event.target.value)}
          placeholder="Default: digital"
          type="password"
        />
        <br />
        <Button variant="contained" color="primary" type="submit" className={classes.button}>
          <FormattedMessage id="Log in" />
        </Button>
      </form>
      </Grid>
    </Grid>
  );
};

Login.propTypes = {
  intl: PropTypes.shape({
    locale: PropTypes.string,
  }),
};

export default injectIntl(Login);
