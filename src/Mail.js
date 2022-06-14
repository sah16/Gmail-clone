import { AccessTimeFilled,LabelImportant,ChevronLeft,ExitToApp, ChevronRight , AddTask, Archive, ArrowBack, Delete, DriveFileMove, Label, MarkAsUnread, MoreVert, ReportGmailerrorred } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectOpenMail } from './features/mailSlice';
import './Mail.css'

function Mail() {
  const navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail);
  
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
            <h2>{selectedMail?.subject}</h2>
            <LabelImportant className="mail__important" />
            <p>{selectedMail?.title}</p>
            <p className='mail__time'>{selectedMail?.time}</p>
          </div>

          <div className="mail__message">
            <p>
              {selectedMail?.description}
            </p>
          </div>
        </div>
    </div>
  )
}

export default Mail