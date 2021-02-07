/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { CourseContext } from '../context';

import { InputGroup, FormControl, Button, InputGroupAddon, InputGroupText, Input } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAlert } from 'react-alert'

import InfoUser from './InfoUser';


const Register = (props) => {
    const alert = useAlert();
    const context = useContext(CourseContext);
    const {register, handleRegister, isRegister, setStatusRegister, errorMessage} = context;
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


    useEffect(() => {
        if(isRegister) {
            if(register) {
                props.history.push("/dangnhap");
            } else {
                //alert.show("Signup failed");
            }
            setStatusRegister(false);
        }
    })
  
  const styleErr = {
        color: "red",
        textAlign: "center"
    }


    return (
    <>
        <div className="login-box">
            <h4 className="login-title">Đăng Kí</h4>
            {
                isRegister && !register ?
                    <p style={styleErr}>{errorMessage}</p>
                : ''
            }
            <div className="login-form">
                    <label htmlFor="basic-url">Email*</label>
                    <InputGroup className="mb-3">
                        <FormControl aria-describedby="basic-addon1" placeholder="Nhập email" onChange={onEmailChange}/>
                    </InputGroup>

                    <label htmlFor="basic-url">Mật Khẩu*</label>
                    <InputGroup className="mb-3">
                        <FormControl aria-describedby="basic-addon1" type="password" placeholder="Nhập mật khẩu" onChange={onPasswordChange}/>
                    </InputGroup>

                    <label htmlFor="basic-url">Nhập lại mật khẩu*</label>
                    <InputGroup className="mb-3">
                        <FormControl aria-describedby="basic-addon1" type="password" placeholder="Nhập lại mật khẩu" onChange={onPasswordChangeAgain}/>
                    </InputGroup>
                    <Button className="btn-login-2" variant="success" onClick={() => handleRegister(email, password, repeatPassword)}>Đăng kí tài khoản</Button>
            </div>
        </div>
    </>
    )
}

export default Register;