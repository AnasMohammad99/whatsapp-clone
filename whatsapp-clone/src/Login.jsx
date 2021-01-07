import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import "./login.css";
import { actionTypes } from './reducer';
import {useStateValue} from "./StateProvider";

const Login=() => {
    const[{},dispatch]=useStateValue();
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user
                })
            })
        .catch((error)=>alert(error.message))
    }; 
    return (

        <div className="login">
            <h1>login</h1>
            <div className="login__container">
                <img src="https://i.pinimg.com/originals/18/ba/0e/18ba0e411b1586feb65e97d7deb45b5d.png" height="500px" alt=""/>
                <div className="login__text">
                    <h1>sign in to whatsApp</h1>
                </div>
                <Button  onClick={signIn} >
                    sign in with google
                </Button>
            </div>
        </div>
    )
}

export default Login;
