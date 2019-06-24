import React from 'react';
import { Router } from '@reach/router';
import { injectIntl } from 'react-intl';

import { getLocalePrefix } from '../locale';
import AdminRoute from '../components/AdminRoute';
import Layout from '../components/Layout';
import Login from '../components/Login';
import Policies from '../components/Policies';
import PrivateRoute from '../components/PrivateRoute';
import Profile from '../components/Profile';
import Settings from '../components/Settings';
import UserDetails from '../components/UserDetails';

// eslint-disable-next-line react/prop-types
const App = ({ intl }) => {
  const localePrefix = getLocalePrefix(intl.locale);

  return (
    <Layout>
      <Router>
        <PrivateRoute path={`${localePrefix}/app/profile`} component={Profile} />
        <PrivateRoute path={`${localePrefix}/app/user-details`} component={UserDetails} />
        <PrivateRoute path={`${localePrefix}/app/policies`} component={Policies} />
        <AdminRoute path={`${localePrefix}/app/settings`} component={Settings} />
        <Login path={`${localePrefix}/app/login`} />
      </Router>
    </Layout>
  );
};

export default injectIntl(App);
