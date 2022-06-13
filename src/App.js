import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Routes , Route , Link} from "react-router-dom" ;
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
      <Router>
        <div className="app">
          <Header/>

          <div className="app__body">
            <Sidebar/>

            <Routes>
              <Route path="/mail" element={<Mail/>}/>  
              <Route path='/' element = {<EmailList/>}/>
            </Routes>
            <div>
              {sendMessageIsOpen && <SendMail/>}
            </div>
          </div>
        </div>
      </Router>
  );
}

export default App;
