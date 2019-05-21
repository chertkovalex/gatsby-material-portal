import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://www.sapiens.com/solutions-categories/data-and-digital/">
        Sapiens Digital
      </Link>
      {' team © 2019'}
    </Typography>
  );
}
