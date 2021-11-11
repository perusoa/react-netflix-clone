import './NavBar.css';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function HideOnScroll ({ children }) {
  const trigger = useScrollTrigger();
  return ( 
    <Slide in={!trigger}>
      {children}
    </Slide>
  );
}

export default function NavBar() {
  return (
    <HideOnScroll>
      <AppBar className="c-nav-bar" position="fixed">
        <img className="c-nav-bar__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
        <AccountBoxIcon className="c-nav-bar__profile" fontSize="large" />
      </AppBar>
    </HideOnScroll>
  );
}
