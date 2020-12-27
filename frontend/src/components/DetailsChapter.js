import React, { useContext, useEffect } from "react";
import {Link} from "react-router-dom";
import { CourseContext } from "../context";


const DetailsChapter = (props) => {
    const context = useContext(CourseContext);
    const {chapter, handleLoadChapter} = context;
    const id = props.match.params.id;
    let arrayList = [];
    
    console.log(arrayList);
    console.log(id);
    useEffect(() => {
        handleLoadChapter(id);
    }, [handleLoadChapter, id]);
    return (
        <>
        {chapter ?
            <div className="details-chapter">
            <div className="details-chapter-left"></div>
            <div className="details-chapter-mid">
                <div className="box-course">
                    <h4 className="hello-user-chapter">Xin chào, USER NAME</h4>
                    <Link to="/khoahoc/"><span className="btn-back">Quay lại</span></Link>
                    <div className="subject-contain">
                        <h3>{chapter.title}</h3>
                        <h5>1. Tóm tắt lý thuyết</h5>
                        <p>{chapter.content1}</p>
                        <h5>2. Các dạng bài tập</h5>
                        <p>{chapter.content2}</p>
                        <div>
                            <Link to = {"/khoahoc/toan/" + chapter.idChapter + "/" + chapter.idLesson}><button type="button" className="btn-BaiTap">Bài Tập</button></Link>
                        </div>
                    </div>          
                </div>
            </div>
            <div className="details-chapter-right"></div>
        </div>
        
        : <div>loading</div>}
        
        </>
    )
}

export default DetailsChapter;