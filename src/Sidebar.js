import { Button } from '@mui/material';
import React from 'react';
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';
import AddIcon from "@mui/icons-material/Add"
import { Inbox } from '@mui/icons-material';

function Sidebar() {
  return (
    <div className='sidebar'>
      <Button 
        startIcon = {<AddIcon fontSize = "large"/>}
        className ="sidebar__compose"
      > 
      Compose
        </Button>

      <SidebarOptions Icon={Inbox} title="Inbox" number={54}/>
    </div>
  )
}

export default Sidebar
