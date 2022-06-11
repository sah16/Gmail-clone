import { Button, IconButton } from '@mui/material';
import React from 'react';
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';
import AddIcon from "@mui/icons-material/Add"
import { AccessTime, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star} from '@mui/icons-material';

function Sidebar() {
  return (
    <div className='sidebar'>
      <Button 
        startIcon = {<AddIcon fontSize = "large"/>}
        className ="sidebar__compose"
      > 
      Compose
        </Button>

        <SidebarOptions Icon={Inbox} title="Inbox" number={54} selected ={true}/>
        <SidebarOptions Icon={Star} title="Starred" number={54}/>
        <SidebarOptions Icon={AccessTime} title="Snoozed" number={54}/>
        <SidebarOptions Icon={LabelImportant} title="Important" number={54}/>
        <SidebarOptions Icon={NearMe} title="Sent" number={54}/>
        <SidebarOptions Icon={Note} title="Drafts" number={54}/>
        <SidebarOptions Icon={ExpandMore} title="More" number={54}/>

        <div className="sidebar__footer">
          <div className="sidebar__footerIcons">
              <IconButton>
                <Person/>
              </IconButton>
              <IconButton>
                <Duo/>
              </IconButton>
              <IconButton>
                <Phone/>
              </IconButton>
          </div>
        </div>
    </div>
  )
}

export default Sidebar
