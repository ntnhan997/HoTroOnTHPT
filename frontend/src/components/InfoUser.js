import React, { useContext } from 'react';

import avatar from '../images/avatar.png';
import fire from "../images/fire.png";
import { CourseContext } from "../context";

const InfoUser = () => {
    const context = useContext(CourseContext);
    const {user} = context;
    return (
        <div className="user-name">
                <div className="info-username">
                    <div className="info-vip">VIP</div>
                    <p className="info-user">{ !user.auth ? "USER NAME" : user.email }</p>
                    <p className="info-level">Level: 1</p>
                    <p className="info-avatar">
                        <img src={avatar} alt="img1"/>
                    </p>
                    <br/>
                    <p className="info-score">Điểm : 0</p>
                    <p className="info-studying">Chuỗi ngày học: 1 <img src={fire} alt=""/></p>
                </div>
            </div>
    )
}

export default InfoUser;