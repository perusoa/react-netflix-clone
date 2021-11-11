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
        <img className="c-nav-bar__logo" src="./netflix-logo.svg" alt="" />
        <div className="c-nav-bar__powered-by">
          Powered By:
          <img className="c-nav-bar__tmdb-logo" src="./tmdb-logo.svg" alt="" />
        </div>
        <AccountBoxIcon className="c-nav-bar__profile" fontSize="large" />
      </AppBar>
    </HideOnScroll>
  );
}
