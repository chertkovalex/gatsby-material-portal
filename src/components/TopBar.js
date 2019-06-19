import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { navigate } from 'gatsby';
import clsx from 'clsx';

import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { getCurrentUser, isLoggedIn, logout } from '../services/auth';
import { getLocalePrefix } from '../locale';
import LanguageSelector from './LanguageSelector';
import logo from '../img/sapiens-logo.png';

const TopBar = ({ intl, classes, drawerOpen, handleDrawerOpen }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuNavigate = path => {
    handleMenuClose();
    navigate(path);
  };

  const open = Boolean(anchorEl) && isLoggedIn();

  const localePrefix = getLocalePrefix(intl.locale);

  return (
    <AppBar position="absolute" className={clsx(classes.appBar, drawerOpen && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, drawerOpen && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="Sapiens Digital Portal Home"
          onClick={() => navigate(`${localePrefix}/`)}
          className={clsx(classes.menuButton)}
        >
          <img src={logo} alt="Sapiens Logo" height="20" />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          {isLoggedIn() ? (
            <>
              <FormattedMessage id="hello" />, {getCurrentUser().name}!
            </>
          ) : (
            <FormattedMessage id="You are not logged in" />
          )}
        </Typography>
        <LanguageSelector />

        {isLoggedIn() && (
          <div>
            <IconButton color="inherit" href="">
              <Badge badgeContent={3} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton
              aria-owns={open ? 'menu-appbar' : undefined}
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
              href=""
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => handleMenuNavigate(`${localePrefix}/app/profile`)}>
                <FormattedMessage id="profile" />
              </MenuItem>
              <MenuItem onClick={() => handleMenuNavigate(`${localePrefix}/app/user-details`)}>
                <FormattedMessage id="user.details" />
              </MenuItem>
              <MenuItem onClick={() => handleMenuNavigate(`${localePrefix}/app/policies`)}>
                <FormattedMessage id="policies" />
              </MenuItem>
              <MenuItem
                onClick={event => {
                  event.preventDefault();
                  logout(() => navigate(`${localePrefix}/`));
                }}
              >
                <FormattedMessage id="logout" />
              </MenuItem>
            </Menu>
          </div>
        )}
        {!isLoggedIn() && (
          <Button color="inherit" onClick={() => navigate(`${localePrefix}/app/login`)}>
            <FormattedMessage id="login" />
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  classes: PropTypes.object,
  drawerOpen: PropTypes.bool,
  handleDrawerOpen: PropTypes.func,
  intl: PropTypes.shape({
    locale: PropTypes.string,
  }),
};

export default injectIntl(TopBar);
