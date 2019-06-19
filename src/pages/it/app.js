import React from 'react';
import { Router } from '@reach/router';
import Layout from '../../components/Layout';
import Profile from '../../components/kartofel';
import PrivateRoute from '../../components/PrivateRoute';
import UserDetails from '../../components/UserDetails';
import Policies from '../../components/Policies';

import Login from '../../components/Login';

const App = () => {
  return (
    <Layout>
      <Router>
        <PrivateRoute path="/it/app/profile" component={Profile} />
        <PrivateRoute path="/it/app/user-details" component={UserDetails} />
        <PrivateRoute path="/it/app/policies" component={Policies} />
        <Login path="/it/app/login" />
      </Router>
    </Layout>
  );
};

export default App;
