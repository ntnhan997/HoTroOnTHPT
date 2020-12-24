/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Question from "./Question";

const Exercise = () => {
    const [BaiTap, setBaiTap] = useState({
        title: "Lý 10( Bài Tự Luyện Số 1)",
    });
    return (
        <>
            <div className="contain-left"></div>
            <div className="contain-mid questions">
                <h2 className="title_question">{BaiTap.title}</h2>
                <Question />
                <Question />
                <Question />
                <Question />
            </div>
            <div className="contain-right"></div>
        </>
    )
}

export default Exercise;