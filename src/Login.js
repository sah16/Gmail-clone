import { Button } from '@mui/material';
import React from 'react';
import { login } from './features/userSlice';
import { auth, provider } from './firebase';
import './Login.css';
import {useDispatch} from 'react-redux';

function Login() {

    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider).then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        })
        .catch(error => alert(error.message));
    }; 
  return (
    <div className='login'>
        <div className="login__container">
            <img src="https://i.gadgets360cdn.com/large/gmail_thumb_1615466143940.jpg" alt="" />
            <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
        </div>
    </div>
  )
}

export default Login