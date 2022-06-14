import React from 'react';
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Avatar, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AppsIcon from '@mui/icons-material/Apps';
import TuneIcon from '@mui/icons-material/Tune';
import { logout, selectUser } from './features/userSlice';
import {useSelector} from 'react-redux';
import { auth } from './firebase';
import {useDispatch} from 'react-redux';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
    };

  return (
    <div className='header'>
        <div className="header__left">
        <IconButton>
            <MenuIcon/>
        </IconButton>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcf7latmF9IrayB9Dq4wD0AUjCq_vOQ1yNZg&usqp=CAU" alt="" />
        </div>
        <div className="header__middle">
            <IconButton>
                <SearchIcon/>
            </IconButton> 
            <input type="text" placeholder='Search mail' />
                <IconButton>
                    <TuneIcon/>
                </IconButton>
            
        </div>
        <div className="header__right">
            <IconButton>
                <HelpOutlineIcon/>
            </IconButton>
            <IconButton>
                <SettingsIcon/>
            </IconButton>
            <IconButton>
                <AppsIcon/>
            </IconButton>
            <Avatar onClick={signOut} src={user?.photoUrl}/>
        </div>
    </div>
  )
}

export default Header