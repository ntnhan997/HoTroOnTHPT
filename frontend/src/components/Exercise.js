/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { CourseContext } from '../context';
import Question from "./Question";
import Union from '../images/Union.png';


const Exercise = (props) => {
    const context = useContext(CourseContext);
    const idLess = props.match.params.idLesson;
    const {status,BaiTap,timer,handleTimer, submit, handleSubmit, score, handleReset, handleLoadExam} = context;
    const StatusActive = (id) => {
        for (let i of status){
            if (Number(i.id) === Number(id)){
                return true;
            }
        }
        return false;
    }
    useEffect(() => {
            handleLoadExam(idLess);
                let i = () => {
                    return 0;
                };
                handleReset(i);
                handleTimer();
    }, [handleTimer, handleReset,handleLoadExam,idLess]);
    const formatTimer =  () => {
        let measuredTime = new Date(null);
        measuredTime.setSeconds(timer); // specify value of SECONDS
        let MHSTime = measuredTime.toISOString().substr(11, 8);
        return MHSTime;
    }

    const check = (id) => {
        for(let item of status){
            if((Number(item.id) === Number(id)) && (item.choose === item.correct)){
                return "status_question status_active";
            }
        }
        return "status_question status_incorrect"
    }

    const handle = () => {
        props.history.push("/khoahoc/");
    }
    
    return (
        <>
        {
            BaiTap.questions.length > 0 ?
                <>
                    <div className="contain-left">
                <div className="info-left">

                <div className="timer-question">
                    <img src={Union} alt="image1"/>
                    <span>
                        {formatTimer()}
                    </span>

                    {/* <button type="button" onClick={handleTimer}>click</button> */}

                </div>

                {
                    submit && 
                    <div className="result">
                        <h4>Kết quả bài làm</h4>
                        <p>Số câu đúng: {score}</p>
                        <p>Số câu sai: {BaiTap.questions.length - score}</p>
                        <p>Kết quả: {Math.round((score / BaiTap.questions.length) * 100)}%</p>
                        
                    </div>
                }

                </div>
                
                
                
            </div>
            <div className="contain-mid questions">
                <h2 className="title_question">{BaiTap.title}</h2>
                {
                    BaiTap.questions.map(item => {
                        return <Question key={item.questionId}
                            question = {item.question}
                            answers = {item.answers}
                            correct = {item.correct}
                            questionId = {item.questionId}
                           
                        />
                    })
                }
            </div>
            <div className="contain-right">
                <div className="info-right">
                <div className="total_question">
                    <h4>Tổng số câu hỏi: {BaiTap.questions.length}</h4>
                    {
                        !submit ? 
                        <>
                            <div className="total_question_contain">
                        {
                            BaiTap.questions.map(item => {
                                return <div key={item.questionId} className={StatusActive(item.questionId) ? "status_question status_active" :  "status_question"}>
                                    {
                                        item.questionId
                                    }
                                </div>
                            })
                        }
                            </div>
                        </>
                        :
                        <>
                            <div className="total_question_contain">
                            {
                                BaiTap.questions.map(item => {
                                    return <div key={item.questionId} className={check(item.questionId) }>
                                        {
                                            item.questionId
                                        }
                                    </div>
                                })
                            }
                            </div>
                        </>
                    }
                    
                   <div className= "total_question_footer">
                       {
                           !submit ? 
                           <>
                                <div className= "total_question_footer_left">
                                    <div className="status_question status_active"></div>
                                    <div className="status_question"></div>
                                </div>
                                <div className="total_question_footer_right">
                                    <span>Câu hỏi đã làm</span><br/>
                                    <span>Câu hỏi chưa làm</span>
                                </div>
                           </>:
                           <>
                                <div className= "total_question_footer_left">
                                    <div className="status_question status_incorrect"></div>
                                    <div className="status_question status_active"></div>
                                </div>
                                <div className="total_question_footer_right">
                                    <span>Đáp án sai</span><br/>
                                    <span>Đáp án đúng</span>
                                </div>
                           </>
                       }
                                
                   </div>
                   <div className="total_question_footer_bottom">
                        { !submit ? <button type="button" className="btn-NopBai" onClick={handleSubmit}>Nộp bài</button> : <button type="button" className="btn-NopBai" onClick={() => handleReset(handle)}>Kết thúc</button>}
                   </div>


                </div>
                
                   
                </div>
            </div>
                </>


            :

            <div>
                loading
            </div>
        }
            
        </>
    )
}

export default Exercise;