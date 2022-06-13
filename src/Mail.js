import { AccessTimeFilled,LabelImportant,ChevronLeft,ExitToApp, ChevronRight , AddTask, Archive, ArrowBack, Delete, DriveFileMove, Label, MarkAsUnread, MoreVert, ReportGmailerrorred } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Mail.css'

function Mail() {
  const navigate = useNavigate();
  
  return (
    <div className="mail">
        <div className="mail__tools">
          <div className="mail__toolsLeft">
              <IconButton onClick={() => navigate("/")}>
                <ArrowBack/>
              </IconButton>
                <IconButton>
                  <Archive/>
                </IconButton>
                <IconButton>
                  <ReportGmailerrorred />
                </IconButton>
                <IconButton>
                  <Delete />
                </IconButton>
                <IconButton>
                  <MarkAsUnread/>
                </IconButton>
                <IconButton>
                  <AccessTimeFilled/>
                </IconButton>
                <IconButton>
                  <AddTask/>
                </IconButton>
                <IconButton>
                  <DriveFileMove/>
                </IconButton>
                <IconButton>
                  <Label/>
                </IconButton>
                <IconButton>
                  <MoreVert/>
                </IconButton>
          </div>
          <div className="mail__toolsRight">
          <IconButton>
                    <ChevronLeft />
                </IconButton>
                <IconButton>
                    <ChevronRight/>
                </IconButton>
                <IconButton>
                  <ExitToApp />
                </IconButton>
          </div>
        </div>
        <div className="mail__body">
          <div className="mail__bodyHeader">
            <h2>Subject</h2>
            <LabelImportant className="mail__important" />
            <p>Title</p>
            <p>10pm</p>
          </div>
        </div>
    </div>
  )
}

export default Mail