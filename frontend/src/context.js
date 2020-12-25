import React from 'react';
import swal from 'sweetalert';

const CourseContext = React.createContext();


class CourseProvider extends React.Component{
       state = {
            status : [
            //     {
            //     id: "",
            //     choose: ""
            // }
        ],
        MonHoc: [
            {
                id: 0,
                name: "Toán",
                img: "/images/monhoc/toan.png",
                date: "01/20"
            },
            {
                id: 1,
                name: "Lý",
                img: "/images/monhoc/toan.png",
                date: "05/20"
            },
            {
                id: 2,
                name: "Hóa",
                img: "/images/monhoc/toan.png",
                date: "09/20"
            },
            {
                id: 3,
                name: "Sinh",
                img: "/images/monhoc/toan.png",
                date: "10/20"
            },
            {
                id: 4,
                name: "Anh Văn",
                img: "/images/monhoc/toan.png",
                date: "05/20"
            }

        ]
        ,
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
                    question:"1 + 1 = ?",
                    answers: ["1", "2", "3", "4"],
                    correct: "2",
                    questionId: "2"
                },
                {
                    question:"2 x 6 = ?",
                    answers: ["50", "1", "0", "12"],
                    correct: "12",
                    questionId: "3"
                },
                {
                    question:"6 / 3 = ? ",
                    answers: ["1", "2", "3", "4"],
                    correct: "2",
                    questionId: "4"
                },
                {
                    question:"1 + 2 = ?",
                    answers: ["1", "2", "3", "4"],
                    correct: "3",
                    questionId: "5"
                },
                {
                    question:"10 - 9 = ?",
                    answers: ["1", "2", "3", "4"],
                    correct: "1",
                    questionId: "6"
                }
                ]
            },
            timer: 20,
            submit: false,
            score: 0,
        }
    
    handleTimer = () => {
        const time = setInterval(() => {
            this.setState({
                timer: this.state.timer - 1
            });
            if(this.state.submit === true){
                clearInterval(time);
            }
            if(this.state.timer === 0){
                this.handleSubmit(); // dang bi bug nen de 2 ham moi chay dc chua tim ra loi
                clearInterval(time);
            }
        }, 1000);
        
    }

    handleStatus = (e) => {
        if(this.state.status.length === 0){
            this.setState({
                status: [
                    ...this.state.status,
                    {
                        id: e.target.name,
                        choose: e.target.value
                    }
                ]
            })
        }else{
            for(let i in this.state.status){
                if(Number(this.state.status[i].id) === Number(e.target.name)){
                    console.log(this.state.status.slice(0, i));
                    this.setState({
                        status: [
                            ...this.state.status.slice(0, i),
                            {
                                id: e.target.name,
                                choose: e.target.value
                            },
                            ...this.state.status.slice(i + 1, this.state.status.length)
                        ]
                    })
                    return 0;
                }    
            }
            this.setState({
                status: [
                    ...this.state.status,
                    {
                        id: e.target.name,
                        choose: e.target.value
                    }
                ]
            })
        }
    }
    handleSubmit = () => {

        if(this.state.timer === 0 || (this.state.status.length === this.state.BaiTap.questions.length) ){
            this.checkAnswerCorrect();
            this.checkAnswerCorrect();
        }else{

        if(this.state.status.length !== this.state.BaiTap.questions.length ){
            swal({
                title: "Bạn có chắc chắn bạn nộp bài?",
                text: `Vì còn ${this.state.BaiTap.questions.length - this.state.status.length} câu bạn chưa hoàn thành!`,
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                    this.checkAnswerCorrect(); // dang bi bug nen de 2 ham moi chay dc
                    this.checkAnswerCorrect();
                } else {
                  
                }
              });
        }
    }
    }

    handleReset = (po) => { //po ham de chuyen url ve trang nao muon
        this.setState({
            status: [],
            submit: false, 
            timer: 20,
            score: 0,
        })
        po();
    }

    checkAnswerCorrect = () => {
        this.setState({
            submit: true
        });
        // this.state.status // ket qua chon id choose
        // this.state.questions // dap an   questionId    correct
        let dem = 0;
        for(let index of this.state.status){
            for(let item of this.state.BaiTap.questions){
                if(Number(index.id) === Number(item.questionId) && index.choose === item.correct){
                    dem ++;
                    this.setState({
                        score: dem
                    })
                }
            }
        }
        for(let item of this.state.status){
            for(let index of this.state.BaiTap.questions){
                if(Number(item.id) === Number(index.questionId)){
                    item.correct = index.correct;
                }
            }
        }
    }
    render(){
        return(
            <CourseContext.Provider value = {{
                ...this.state,
                handleStatus: this.handleStatus,
                handleTimer: this.handleTimer,
                handleSubmit: this.handleSubmit,
                handleReset: this.handleReset
            }} >
                 {this.props.children}   
            </CourseContext.Provider>
        )
    }
}

const CourseConsumer = CourseContext.Consumer;


export {CourseProvider, CourseConsumer, CourseContext};
