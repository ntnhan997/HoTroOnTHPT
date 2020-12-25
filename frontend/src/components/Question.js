import React, { useContext, useState } from 'react';
import { CourseContext } from '../context';
const Question = (props) => {
    const context = useContext(CourseContext);
    const {handleStatus, submit, status} = context;
    const {question, answers, questionId, correct} = props;
    const [answer1, setAnswer1] = useState({
        an1: false,
        an2: false,
        an3: false,
        an4: false
    });

    const check_incorrect = (id,answer) => {
        let dem = 0;
        for(let index of status){
            if(Number(index.id) !== Number(id)){
                dem++;
            }
        }

        if(dem === status.length && answer === correct ){
            return "radio_correct";
        }

        for(let item of status){
            if(Number(item.id) === Number(id) && item.correct === answer && item.choose !== item.correct){
                return "radio_correct";
            }
           
        }
        return "";
    }

    return (
        <div>
            <p className="question">Câu {questionId}: {question}</p>
            <div className="answer">
                <input type="radio" name={questionId} disabled = {submit === true} id="question1" value={answers[0]} onClick={(e) => handleStatus(e)} onChange={() => setAnswer1({an1: true, an2: false, an3: false, an4: false})}/>
                <label htmlFor="question1" className = {answer1.an1 === true ? "radio_active" : "" || (submit === true && check_incorrect(questionId,answers[0]))} >A. {answers[0]}</label>
            </div>
            <div className="answer">
                <input type="radio" name={questionId} disabled = {submit === true} id="question2" value={answers[1]} onClick={(e) => handleStatus(e)} onChange={() => setAnswer1({an1: false, an2: true, an3: false, an4: false})}/>
                <label htmlFor="question1" className = {answer1.an2 === true ? "radio_active" : "" || (submit === true && check_incorrect(questionId,answers[1])) }>B. {answers[1]}</label>
            </div>
            <div className="answer">
                <input type="radio" name={questionId} disabled = {submit === true} id="question3" value={answers[2]} onClick={(e) => handleStatus(e)} onChange={() => setAnswer1({an1: false, an2: false, an3: true, an4: false})}/>
                <label htmlFor="question1" className = {answer1.an3 === true ? "radio_active" : "" || (submit === true && check_incorrect(questionId,answers[2])) }>C. {answers[2]}</label>
            </div>
            <div className="answer">
                <input type="radio" name={questionId} disabled = {submit === true} id="question4" value={answers[3]} onClick={(e) => handleStatus(e)} onChange={() => setAnswer1({an1: false, an2: false, an3: false, an4: true})}/>
                <label htmlFor="question1" className = {answer1.an4 === true ? "radio_active" : "" || (submit === true && check_incorrect(questionId,answers[3])) }>D. {answers[3]}</label>
            </div>
        </div>
    )
}

export default Question;