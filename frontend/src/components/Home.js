/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { CourseContext } from '../context';
import Subject from './Subject';
import {
    Link
  } from "react-router-dom";


import Dots from './Dots';

const Home = () => {
    const context = useContext(CourseContext);
    const {MonHoc, handleLoadLesson} = context;
    return (
    <>
        <div className="contain-left"></div>
        <div className="contain-course">
            <div className="course">
                <Dots />
                <div className="box-course">
                    <div className="list_subject">
                        {MonHoc.map(item => {
                            return <Link to={"/khoahoc/" + item.name} onClick = {handleLoadLesson}><Subject key = {item.id} id={item.id} name={item.name} img={item.img} date={item.date} /></Link>
                        })}
                    </div>   
                </div>
            </div>
        </div>
        <div className="contain-right"></div>
    </>
    )
}

export default Home;