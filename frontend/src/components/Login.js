/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState, useHistory } from 'react';
import { CourseContext } from '../context';

import { InputGroup, FormControl, Button, InputGroupAddon, InputGroupText, Input } from 'react-bootstrap';
import { useAlert } from 'react-alert'

export default function Login(props){
    const context = useContext(CourseContext);
    const alert = useAlert();
    const {loginSuccess, loginFailed, handleLogin,setLoginFailed} = context;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const errorMessage = '*Wrong email or password*';
    useEffect(()=> {
        if(loginSuccess){
            props.history.push("/");
            setLoginFailed(false);
        } else if(loginFailed) {
            // alert.show('Wrong email or password');
            // setLoginFailed(false);
            return;
        } 
    })

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const styleErr = {
        color: "red",
        textAlign: "center"
    }
   

    return (
    <>
       <div className="login-box">
        <h4 className="login-title">Login</h4>
        <div className="login-form">
        {
            loginFailed ?
                <p style={styleErr}>{errorMessage}</p>
            : ''
        }
                <label htmlFor="basic-url">Email address*</label>
                <InputGroup className="mb-3">
                    <FormControl aria-describedby="basic-addon1" placeholder="Enter email address" onChange={onEmailChange}/>
                </InputGroup>

                <label htmlFor="basic-url">Password*</label>
                <InputGroup className="mb-3">
                    <FormControl aria-describedby="basic-addon1" placeholder="Enter password" onChange={onPasswordChange}/>
                </InputGroup>
                <Button className="btn-login-2" variant="success" onClick = {() => handleLogin(email,password)}>Login</Button>
            </div>
        </div>
    </>
    )
}
