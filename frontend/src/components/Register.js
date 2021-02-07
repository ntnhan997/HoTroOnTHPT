/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { CourseContext } from '../context';

import { InputGroup, FormControl, Button, InputGroupAddon, InputGroupText, Input } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = (props) => {
    const context = useContext(CourseContext);
    const {registerSuccess, handleRegister, errorMessage} = context;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setPasswordAgain] = useState("");
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onPasswordChangeAgain = (e) => {
        setPasswordAgain(e.target.value);
    }

    const styleErr = {
        color: "red",
        textAlign: "center"
    }

    return (
    <>
        <div className="login-box">
            <h4 className="login-title">Register</h4>
            {
                !!errorMessage ?
                    <p style={styleErr}>{errorMessage}</p>
                : ''
            }
            <div className="login-form">
                    <label htmlFor="basic-url">Email address*</label>
                    <InputGroup className="mb-3">
                        <FormControl aria-describedby="basic-addon1" placeholder="Enter email address" onChange={onEmailChange}/>
                    </InputGroup>

                    <label htmlFor="basic-url">Create password*</label>
                    <InputGroup className="mb-3">
                        <FormControl aria-describedby="basic-addon1" placeholder="Enter password" onChange={onPasswordChange}/>
                    </InputGroup>

                    <label htmlFor="basic-url">Repeat password*</label>
                    <InputGroup className="mb-3">
                        <FormControl aria-describedby="basic-addon1" placeholder="Enter password" onChange={onPasswordChangeAgain}/>
                    </InputGroup>
                    <Button className="btn-login-2" variant="success" onClick={() => handleRegister(email, password, repeatPassword)}>Register Account</Button>
            </div>
        </div>
    </>
    )
}

export default Register;