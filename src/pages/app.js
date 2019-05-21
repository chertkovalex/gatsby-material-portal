import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/Layout';
import Profile from '../components/profile';
import PrivateRoute from '../components/PrivateRoute';
import UserDetails from '../components/UserDetails';
import Policies from '../components/Policies';

import Login from '../components/Login';

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <PrivateRoute path="/app/user-details" component={UserDetails} />
      <PrivateRoute path="/app/policies" component={Policies} />
      <Login path="/app/login" />
    </Router>
  </Layout>
);

export default App;
