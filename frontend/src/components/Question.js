import React from 'react';

const Question = () => {
    return (
        <div>
            <p class="question">Câu 1: Lúc 8 giờ sáng nay một ô tô đang chạy trên Quốc lộ 1 cách Hà Nội 20 km. Việc xác định vị trí của ô tô như trên còn thiếu yếu tố nào?</p>
            <div className="answer">
                <input type="radio" name="question" id="question1"/>
                <label htmlFor="question1">A. Mốc thời gian</label>
            </div>
            <div className="answer">
                <input type="radio" name="question" id="question2"/>
                <label htmlFor="question1">B. Vật làm mốc</label>
            </div>
            <div className="answer">
                <input type="radio" name="question" id="question3"/>
                <label htmlFor="question1">C. Chiều dương trên đường đi</label>
            </div>
            <div className="answer">
                <input type="radio" name="question" id="question4"/>
                <label htmlFor="question1">D. Thước đo và đồng hồ</label>
            </div>
        </div>
    )
}

export default Question;