/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { CourseContext } from '../context';
import Subject from './Subject';
import {
    Link
  } from "react-router-dom";

import { InputGroup, FormControl, Button, InputGroupAddon, InputGroupText, Input } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


import InfoUser from './InfoUser';

const Login = () => {
    return (
    <>
        <div className="login-box">
            <h4 className="login-title">Login</h4>
            <div className="login-form">
                    <label htmlFor="basic-url">Email address*</label>
                    <InputGroup className="mb-3">
                        <FormControl aria-describedby="basic-addon1" placeholder="Enter email address"/>
                    </InputGroup>

                    <label htmlFor="basic-url">Password*</label>
                    <InputGroup className="mb-3">
                        <FormControl aria-describedby="basic-addon1" placeholder="Enter password"/>
                    </InputGroup>
                    <Button className="btn-login-2" variant="success">Login</Button>
            </div>
        </div>
    </>
    )
}

export default Login;