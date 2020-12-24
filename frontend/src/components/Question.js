import React, { useContext } from 'react';
import { CourseContext } from '../context';

const Question = (props) => {
    const context = useContext(CourseContext);
    const {handleStatus} = context;
    const {question, answers, correct, questionId, status} = props;
    return (
        <div>
            <p className="question">Câu {questionId}: {question}</p>
            <div className="answer">
                <input type="radio" name={questionId} id="question1" value={questionId} onClick={(e) => handleStatus(e)}/>
                <label htmlFor="question1">A. {answers[0]}</label>
            </div>
            <div className="answer">
                <input type="radio" name={questionId} id="question2" value={questionId} onClick={(e) => handleStatus(e)}/>
                <label htmlFor="question1">B. {answers[1]}</label>
            </div>
            <div className="answer">
                <input type="radio" name={questionId} id="question3" value={questionId} onClick={(e) => handleStatus(e)}/>
                <label htmlFor="question1">C. {answers[2]}</label>
            </div>
            <div className="answer">
                <input type="radio" name={questionId} id="question4" value={questionId} onClick={(e) => handleStatus(e)}/>
                <label htmlFor="question1">D. {answers[3]}</label>
            </div>
        </div>
    )
}

export default Question;