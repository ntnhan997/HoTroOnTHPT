/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { CourseContext } from '../context';
import Subject from './Subject';
import {
    Link
  } from "react-router-dom";


import InfoUser from './InfoUser';

const Course = (props) => {
    const context = useContext(CourseContext);
    const {MonHoc, user, handleLoadLesson} = context;
    console.log(user);
    const navigatePageLogin = () => {
        props.history.push("/dangnhap");
    };
    return (
    <>
        <div className="contain-left"></div>
        <div className="contain-course">
            <InfoUser />
            <div className="course">
                <div className="box-course">
                    <h4>Xin chào, { user === "" ? "USER NAME" : user }</h4>
                    <div className="subject-contain">
                        <h3>Môn Học</h3>
                        <div className="list_subject">
                            {MonHoc.map(item => {
                                return <Link to={
                                    user === "" ? "/dangnhap"
                                    :
                                    "/khoahoc/" + item.name
                                } onClick = { handleLoadLesson }><Subject key = {item.id} id={item.id} name={item.name} img={item.img} date={item.date} /></Link>
                            })}
                        </div>
                    </div>          
                </div>
            </div>
            
        </div>
        <div className="contain-right"></div>
    </>
    )
}

export default Course;