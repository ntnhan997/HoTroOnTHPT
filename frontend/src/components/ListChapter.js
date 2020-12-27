import React, { useContext } from "react";
import {Link} from "react-router-dom";
import { CourseContext } from "../context";
import InfoUser from './InfoUser';

const ListChapter = (props) => {
    const context = useContext(CourseContext);
    const {DanhSachChuong} = context;
    const params = props.match.params.name;
    return (
        <div className="list-chapter">
            <div className="list-chapter-left"></div>
            <div className="contain-course">
            <InfoUser />
            <div className="course">
                <div className="box-course">
                    <h4 className="hello-user-chapter">Xin chào, USER NAME</h4>
                    <Link to="/khoahoc/"><span className="btn-back">Quay lại</span></Link>
                    <div className="subject-contain">
                        <h4>Môn Toán</h4>
                        {
                            DanhSachChuong.map(item => {
                                return (
                                        <Link to={"/khoahoc/"+ params + "/" + item.idChapter}><p>{item.idChapter + 1}. {item.name}</p></Link>
                                )
                            })
                        }
                    </div>          
                </div>
            </div>
            
        </div>
            <div className="list-chapter-right"></div>
        </div>
    )
}

export default ListChapter;