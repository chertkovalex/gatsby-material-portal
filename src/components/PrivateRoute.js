import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { navigate } from 'gatsby';

import { getLocalePrefix } from '../locale';
import { isLoggedIn } from '../services/auth';

const PrivateRoute = ({ intl, component: Component, location, ...rest }) => {
  const localePrefix = getLocalePrefix(intl.locale);

  if (!isLoggedIn() && location.pathname !== `${localePrefix}/app/login`) {
    // If we’re not logged in, redirect to the home page.
    navigate(`${localePrefix}/app/login`);
    return null;
  }

  return <Component {...rest} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  intl: PropTypes.shape({
    locale: PropTypes.string,
  }),
  location: PropTypes.any,
};

export default injectIntl(PrivateRoute);
