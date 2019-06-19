import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Location } from '@reach/router';
import { navigate } from 'gatsby';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import languages, { languageNames, getLocalePrefix } from '../locale';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '5px 26px 5px 6px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const LanguageSelector = props => {
  const { intl } = props;
  const classes = useStyles();

  return (
    <Location>
      {({ location }) => (
        <FormControl className={classes.margin}>
          <Select
            value={intl.locale}
            onChange={e => {
              const currentPrefix = getLocalePrefix(intl.locale);
              const path = location.pathname.substring(currentPrefix.length);
              const newPrefix = getLocalePrefix(e.target.value);
              const navPath = `${newPrefix}${path}`;

              navigate(navPath);
            }}
            input={<BootstrapInput name="language" id="lang-customized-native-simple" />}
          >
            {languages.map((language, index) => (
              <MenuItem key={index} value={language}>
                {languageNames[index]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Location>
  );
};

LanguageSelector.propTypes = {
  intl: PropTypes.shape({
    locale: PropTypes.string,
  }),
};

export default injectIntl(LanguageSelector);
