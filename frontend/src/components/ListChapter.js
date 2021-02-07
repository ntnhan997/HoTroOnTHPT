import React, { useContext, useEffect } from "react";
import {Link} from "react-router-dom";
import { CourseContext } from "../context";
import InfoUser from './InfoUser';

const ListChapter = (props) => {
    const context = useContext(CourseContext);
    const {listchapter, user, handleLoadLesson} = context;
    const params = props.match.params.name;
    console.log(listchapter);
    console.log(user);
    useEffect(() => {
        handleLoadLesson(params);
    },[handleLoadLesson, params])
    return (
        <>
        {listchapter.length > 0 ?
        <div className="list-chapter">
        <div className="list-chapter-left"></div>
        <div className="contain-course">
        <InfoUser />
        <div className="course">
            <div className="box-course">
                <h4 className="hello-user-chapter">Xin chào, { !user.auth ? "USER NAME" : user.email }</h4>
                <Link to="/khoahoc/"><span className="btn-back">Quay lại</span></Link>
                <div className="subject-contain">
                    <h4>Môn Toán</h4>
                    {
                        listchapter.map(item => {
                            return (
                                    <Link to={"/khoahoc/"+ params + "/" + item.idChapter}><p>{item.idChapter}. {item.name}</p></Link>
                            )
                        })
                    }
                </div>          
            </div>
        </div>
        
    </div>
        <div className="list-chapter-right"></div>
    </div>
        
        
        
        : <div className="loader">
            <div className="loader_icon"></div>
        </div>}
        
        </>
    )
}

export default ListChapter;