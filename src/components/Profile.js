import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { getCurrentUser } from '../services/auth';

const Profile = () => (
  <>
    <h1><FormattedMessage id="Your profile"/></h1>
    <ul>
      <ul>
        <li><FormattedMessage id="name"/>: {getCurrentUser().name}</li>
        <li><FormattedMessage id="e-mail"/>: {getCurrentUser().email}</li>
      </ul>
    </ul>
  </>
);

export default injectIntl(Profile);
