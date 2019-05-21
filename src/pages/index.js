import React from 'react';
import { Link, graphql } from 'gatsby';

import Typography from '@material-ui/core/Typography';
//import Box from '@material-ui/core/Box';
//import MuiLink from '@material-ui/core/Link';
//import ProTip from '../components/ProTip';
//import Link from '../components/Link';
import Dashboard from '../components/Dashboard';
import Layout from '../components/Layout';
import Orders from '../components/Orders';
import UserDetails from '../components/UserDetails';

import { getCurrentUser, isLoggedIn } from '../services/auth';

export default function App({ data }) {
  return (
    <Layout>
      <h1>{data.site.siteMetadata.title}</h1>
      <h1>Hello{isLoggedIn() && `, ${getCurrentUser().name}`}!</h1>
      <p>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your <Link to="/app/profile">profile</Link>
          </>
        ) : (
          <>
            You should <Link to="/app/login">log in</Link> to see restricted content
          </>
        )}
      </p>
      {/*      <Router>
        <div path="/">
          {auth && <Orders />}
          {!auth && <h1>Not logged in dashboard</h1>}
        </div>
        
      </Router>*/}
    </Layout>
    /*<Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gatsby v4-beta example
        </Typography>
        <Link to="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <MadeWithLove />
      </Box>
    </Container>*/
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
