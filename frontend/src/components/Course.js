/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { CourseContext } from '../context';
import Subject from './Subject';
import {
    Link
  } from "react-router-dom";


const Course = () => {
    const context = useContext(CourseContext);
    const {MonHoc} = context;
    return (
    <>
        <div className="contain-left"></div>
        <div className="contain-mid course">
            <h3>Môn Học</h3>
            <div className="list_subject">
                {MonHoc.map(item => {
                    return <Link to={"/khoahoc/" + item.id}><Subject key = {item.id} id={item.id} name={item.name} img={item.img} date={item.date} /></Link>
                })}
            </div>
        </div>
        <div className="contain-right"></div>
    </>
    )
}

export default Course;