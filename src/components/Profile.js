import React from 'react';
import { FormattedMessage } from 'react-intl';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { getCurrentUser } from '../services/auth';

const Profile = () => {
  const { firstName, lastName, email, mainRole } = getCurrentUser();

  return (
    <>
      <h1>
        <FormattedMessage id="Your profile" />
      </h1>

      <ListItem>
        <ListItemText secondary={<FormattedMessage id="First Name" />} primary={firstName} />
      </ListItem>
      <ListItem>
        <ListItemText secondary={<FormattedMessage id="Last Name" />} primary={lastName} />
      </ListItem>
      <ListItem>
        <ListItemText secondary={<FormattedMessage id="Main Role" />} primary={mainRole} />
      </ListItem>
      <ListItem>
        <ListItemText secondary={<FormattedMessage id="e-mail" />} primary={email} />
      </ListItem>
    </>
  );
};

export default Profile;
