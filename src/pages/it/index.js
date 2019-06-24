import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Grid } from '@material-ui/core';
import { Link, graphql } from 'gatsby';

import { getCurrentUser, isLoggedIn } from '../../services/auth';
import { getLocalePrefix } from '../../locale';
import Dashboard from '../../components/Dashboard';
import Layout from '../../components/Layout';
import NewsList from '../../components/NewsList';

// eslint-disable-next-line react/prop-types
const App = ({ intl, data }) => {
  const { firstName, lastName } = getCurrentUser();
  const isAuth = isLoggedIn();
  const dashboardProps = {
    isAuth,
  };
  const localePrefix = getLocalePrefix(intl.locale);

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} sm={8} lg={9}>
          <h1>{data.site.siteMetadata.title}</h1>
          <h1>
            <FormattedMessage id="hello" />
            {isAuth && `, ${firstName} ${lastName}`}!
          </h1>
          <Dashboard {...dashboardProps} />
          <p>
            {isAuth ? (
              <>
                You are logged in, so check your <Link to={`${localePrefix}/app/profile`}>profile</Link>
              </>
            ) : (
              <>
                You should <Link to={`${localePrefix}/app/login`}>log in</Link> to see restricted content
              </>
            )}
          </p>
        </Grid>
        <Grid item xs={12} sm={4} lg={3}>
          <NewsList />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default injectIntl(App);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
