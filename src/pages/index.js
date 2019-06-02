import React from 'react';

import { Link, graphql } from 'gatsby';

import { Grid } from '@material-ui/core';
import Layout from '../components/Layout';
import NewsList from '../components/NewsList';
import Dashboard from '../components/Dashboard';

import { getCurrentUser, isLoggedIn } from '../services/auth';

// eslint-disable-next-line react/prop-types
export default function App({ data }) {
  const isAuth = isLoggedIn();

  const dashboardProps = {
    isAuth,
  };

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} sm={8} lg={9}>
          <h1>{data.site.siteMetadata.title}</h1>
          <h1>Hello{isAuth && `, ${getCurrentUser().name}`}!</h1>
          <Dashboard {...dashboardProps} />
          <p>
            {isAuth ? (
              <>
                You are logged in, so check your <Link to="/app/profile">profile</Link>
              </>
            ) : (
              <>
                You should <Link to="/app/login">log in</Link> to see restricted content
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
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
