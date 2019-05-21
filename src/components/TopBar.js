import React from 'react';
import PropTypes from 'prop-types';
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
import { navigate } from 'gatsby';

import { getCurrentUser, isLoggedIn, logout } from '../services/auth';

export default function TopBar({ classes, drawerOpen, handleDrawerOpen }) {
  const content = { message: '', login: true };
  if (isLoggedIn()) {
    content.message = `Hello, ${getCurrentUser().name}!`;
  } else {
    content.message = 'You are not logged in';
  }

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

        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          {content.message}
        </Typography>

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
              <MenuItem onClick={()=>handleMenuNavigate(`/app/profile`)}>
                Profile
              </MenuItem>
              <MenuItem onClick={()=>handleMenuNavigate(`/app/user-details`)}>
                User details
              </MenuItem>
              <MenuItem onClick={()=>handleMenuNavigate(`/app/policies`)}>
                Policies
              </MenuItem>
              <MenuItem
                onClick={event => {
                  event.preventDefault();
                  logout(() => navigate(`/`));
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        )}
        {!isLoggedIn() && (
          <Button color="inherit" onClick={() => navigate(`/app/login`)}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  classes: PropTypes.object, 
  drawerOpen: PropTypes.bool, 
  handleDrawerOpen: PropTypes.func
}