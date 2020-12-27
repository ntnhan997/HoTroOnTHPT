import React from 'react';
import cover from "../images/monhoc/Rectangle.png";

const Subject = (props) => {
    const {name, img, date } = props;
    return (
        <div className="subject">
            <div className="cover-subject">
                <img className="img-top" src={img} style= {name === "Hoa" ? { top: "-14px" } : {}} alt=""/>
                <img className="img-bottom" src={cover} alt=""/>
                <p className="name-subject">{name === "toan" ? "Toán": name === "hoa" ? "Hóa" : "Lý"}</p>
            </div>

            <p>{date}</p>
            
        </div>
    )
}

export default Subject;