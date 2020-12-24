import React from 'react';


const CourseContext = React.createContext();

class CourseProvider extends React.Component{
    state = {
        status : [],
        BaiTap: {
            title: "Lý 10( Bài Tự Luyện Số 1)",
            questions: [
            {
                question:"Lúc 8 giờ sáng nay một ô tô đang chạy trên Quốc lộ 1 cách Hà Nội 20 km. Việc xác định vị trí của ô tô như trên còn thiếu yếu tố nào?",
                answers: ["Mốc thời gian", "Vật làm mốc", "Chiều dương trên đường đi", "Thước đo và đồng hồ"],
                correct: "Chiều dương trên đường đi",
                questionId: "1"
            },
            {
                question:"1 + 1",
                answers: ["1", "2", "3", "4"],
                correct: "2",
                questionId: "2"
            },
            {
                question:"Lúc 8 giờ sáng nay một ô tô đang chạy trên Quốc lộ 1 cách Hà Nội 20 km. Việc xác định vị trí của ô tô như trên còn thiếu yếu tố nào?",
                answers: ["Mốc thời gian", "Vật làm mốc", "Chiều dương trên đường đi", "Thước đo và đồng hồ"],
                correct: "Chiều dương trên đường đi",
                questionId: "3"
            },
            {
                question:"1 + 1",
                answers: ["1", "2", "3", "4"],
                correct: "2",
                questionId: "4"
            },
            {
                question:"1 + 1",
                answers: ["1", "2", "3", "4"],
                correct: "2",
                questionId: "5"
            },
            {
                question:"2 + 1",
                answers: ["1", "2", "3", "4"],
                correct: "2",
                questionId: "6"
            }
            ]
        }
    }


    handleStatus = (e) => {
        if(this.state.status.length === 0){
            this.setState({
                status: [...this.state.status, e.target.value]
            })
        }else{
            for(let i of this.state.status){
                if(Number(i) === Number(e.target.value)){
                    return
                }
            }
            this.setState({
                status: [...this.state.status, e.target.value]
            })
        }
    }
    render(){
        return(
            <CourseContext.Provider value = {{
                ...this.state,
                handleStatus: this.handleStatus
            }} >
                 {this.props.children}   
            </CourseContext.Provider>
        )
    }
}

const CourseConsumer = CourseContext.Consumer;


export {CourseProvider, CourseConsumer, CourseContext};
