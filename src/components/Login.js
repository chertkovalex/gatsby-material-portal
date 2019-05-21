import React from 'react';
import { navigate } from 'gatsby';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { handleLogin, isLoggedIn } from '../services/auth';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Login() {
  const [username, setUsername] = React.useState('digital');
  const [password, setPassword] = React.useState('digital');

  const classes = useStyles();

  const handleSubmit = event => {
    event.preventDefault();
    handleLogin({ username, password });
  };

  if (isLoggedIn()) {
    navigate(`/app/profile`);
  }

  return (
    <>
      <h1>Log in</h1>
      <form
        method="post"
        onSubmit={event => {
          handleSubmit(event);
          navigate(`/app/profile`);
        }}
      >
        <TextField
          defaultValue="digital"
          label="Username"
          margin="normal"
          name="username"
          onChange={event => setUsername(event.target.value)}
          placeholder="Default: digital"
        />
        <br />
        <TextField
          autoComplete="current-password"
          defaultValue="digital"
          label="Password"
          margin="normal"
          name="password"
          onChange={event => setPassword(event.target.value)}
          placeholder="Default: digital"
          type="password"
        />
        <br />
        <Button variant="contained" color="primary" type="submit" className={classes.button}>
          Log In
        </Button>
      </form>
    </>
  );
}
