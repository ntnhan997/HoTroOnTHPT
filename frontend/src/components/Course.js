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
    return (
    <>
        <div className="contain-left"></div>
        <div className="contain-course">
            <InfoUser />
            <div className="course">
                <div className="box-course">
                    <h4>Xin chào, { !user.auth ? "USER NAME" : user.email }</h4>
                    <div className="subject-contain">
                        <h3>Môn Học</h3>
                        <div className="list_subject">
                            {MonHoc.map(item => {
                                return <Link to={
                                    !user.auth ? "/dangnhap"
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