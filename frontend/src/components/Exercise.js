/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { CourseContext } from '../context';
import Question from "./Question";

const Exercise = () => {
    const context = useContext(CourseContext);
    const {status,BaiTap} = context;
    const StatusActive = (id) => {
        for (let i of status){
            if (Number(i) === Number(id)){
                return true;
            }
        }
        return false;
    }
    return (
        <>
            <div className="contain-left"></div>
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
                <div className="total_question">
                    <h4>Tổng số câu hỏi: {BaiTap.questions.length}</h4>
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
                   <div className= "total_question_footer">
                        <div className="status_question status_active"></div>
                        <span>Câu hỏi đã làm</span>
                        <br/>
                        <div className="status_question"></div><span>Câu hỏi chưa làm</span>
                   </div>
                </div>
            </div>
        </>
    )
}

export default Exercise;