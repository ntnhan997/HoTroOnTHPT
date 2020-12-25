import React, { useContext } from 'react';

import {Link} from "react-router-dom";
import { CourseContext } from '../context';

const Details = () => {
    const context = useContext(CourseContext);
    const {handleTimer} = context;
    return (
        <div className="details">
            <div className="details-left"></div>
            <div className="details-mid">
                hi test.....


                <Link to="/khoahoc/monhoc/baitap"><button type="button" onClick={handleTimer}>Bài Tập</button></Link>
            </div>
            <div className="details-right"></div>
        </div>
    )
}

export default Details;