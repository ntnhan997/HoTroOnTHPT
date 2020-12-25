import React from 'react';
import cover from "../images/monhoc/Rectangle.png";

const Subject = (props) => {
    const {name, img, date } = props;
    return (
        <div className="subject">
            <div className="cover-subject">
                <img className="img-top" src={img} alt=""/>
                <img className="img-bottom" src={cover} alt=""/>
                <p className="name-subject">{name}</p>
            </div>

            <p>{date}</p>
            
        </div>
    )
}

export default Subject;