import React from 'react';
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
        <IconButton>
            <MenuIcon/>
        </IconButton>
            <img src="https://x5m7g5e8.stackpathcdn.com/static/images/pages/integrations/logo/gmail.png" alt="" />
        </div>
        <div className="header__middle">

        </div>
        <div className="header__right">

        </div>
    </div>
  )
}

export default Header