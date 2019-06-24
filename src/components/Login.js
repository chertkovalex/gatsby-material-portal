import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { navigate } from 'gatsby';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { handleLogin, isLoggedIn } from '../services/auth';
import { getLocalePrefix } from '../locale';

const useStyles = makeStyles(theme => ({
  loginContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Login = ({ intl }) => {
  const [username, setUsername] = React.useState('agent');
  const [password, setPassword] = React.useState('agent');
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
            defaultValue={username}
            label={intl.formatMessage({ id: 'Username' })}
            margin="normal"
            name="username"
            onChange={event => setUsername(event.target.value)}
            placeholder="Default: digital"
          />
          <br />
          <TextField
            autoComplete="current-password"
            defaultValue={password}
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
