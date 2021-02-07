import React from 'react';
import swal from 'sweetalert';

import axios from 'axios';


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
                name: "toan",
                img: "/images/monhoc/toan.png",
                date: "01/20"
            },
            {
                id: 1,
                name: "ly",
                img: "/images/monhoc/ly.png",
                date: "05/20"
            },
            {
                id: 2,
                name: "hoa",
                img: "/images/monhoc/hoa.png",
                date: "09/20"
            }

        ]
        ,
            BaiTap: {
                title: "Lý 10( Bài Tự Luyện Số 1)",
                questions: [
                // {
                //     question:"Lúc 8 giờ sáng nay một ô tô đang chạy trên Quốc lộ 1 cách Hà Nội 20 km. Việc xác định vị trí của ô tô như trên còn thiếu yếu tố nào?",
                //     answers: ["Mốc thời gian", "Vật làm mốc", "Chiều dương trên đường đi", "Thước đo và đồng hồ"],
                //     correct: "Chiều dương trên đường đi",
                //     questionId: "1"
                // },
                // {
                //     question:"1 + 1 = ?",
                //     answers: ["1", "2", "3", "4"],
                //     correct: "2",
                //     questionId: "2"
                // },
                // {
                //     question:"2 x 6 = ?",
                //     answers: ["50", "1", "0", "12"],
                //     correct: "12",
                //     questionId: "3"
                // },
                // {
                //     question:"6 / 3 = ? ",
                //     answers: ["1", "2", "3", "4"],
                //     correct: "2",
                //     questionId: "4"
                // },
                // {
                //     question:"1 + 2 = ?",
                //     answers: ["1", "2", "3", "4"],
                //     correct: "3",
                //     questionId: "5"
                // },
                // {
                //     question:"10 - 9 = ?",
                //     answers: ["1", "2", "3", "4"],   
                //     correct: "1",
                //     questionId: "6"
                // }
                ]
            },
            chapter: {},
            listchapter : [],
            timer: 20,
            submit: false,
            score: 0,
            loginSuccess: false,
            loginFailed: false,
            registerSuccess: false,
            logout: false,
            user: ""
        }
    
    handleTimer = () => {
        const time = setInterval(() => {
            this.setState({
                timer: this.state.timer - 1
            });
            if(this.state.submit === true){
                clearInterval(time);
                this.setState({timer: 0});
            }
            if(this.state.timer === 0){
                this.handleSubmit(); // dang bi bug nen de 2 ham moi chay dc chua tim ra loi
                clearInterval(time);
                this.setState({timer: 0});
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

    handleLoadLesson = async(name) => {
        const data = await axios.get("https://web-on-tap.herokuapp.com/lesson/chapter/" + name);
        this.setState({
            listchapter: data.data
        });
    }

    handleLoadChapter = async(id) => {
        const data = await axios.get("https://web-on-tap.herokuapp.com/lesson/"+ id);
        this.setState({
            chapter: data.data[0]
        })
        console.log(data.data[0]);
    }


    handleLoadExam = async (id) => {
        this.setState({
            BaiTap: {
                questions: []
            }
        })
        const data = await axios.get("https://web-on-tap.herokuapp.com/exam/1");
        const datas = data.data;
        for(let index of datas){
            const answers = [index.answer1, index.answer2, index.answer3, index.answer4];
            const correct = answers[index.rightanswer - 1];
            this.setState({
                BaiTap: {
                    questions: [
                        ...this.state.BaiTap.questions,
                        {
                            question:   index.question,
                            answers,
                            correct,
                            questionId: index.idExam
                        }
                    ]
                }
            })
        }
    }

    handleLogin = async(email, password) => {
        // const data = await axios.get("https://web-on-tap-be.herokuapp.com/users/login")
        if(email === "tanphat@gmail.com" && password === "1234") {
            this.setState({
                loginSuccess: true,
                loginFailed: false,
                user: "tanphat"
            });
        } else {
            this.setState({
                loginFailed: true
            });
        }
    }

    handleValidation = (data) =>{
        // check empty 
        if(!data.email || !data.password || !data.repeatPassword) {
            this.setState({
                errorMessage: "*Cannot be empty*"
            });
            return
        }

        // check email
        const pattern = /[a-zA-Z0-9]+[\\.]?([a-zA-Z0-9]+)?[\\@][a-z]{3,9}[\\.][a-z]{2,5}/g;
        const result = pattern.test(data.email);
        if (!result) {
            this.setState({
                errorMessage: "*Email is not valid*"
            });
            return;
        } else if(data.password || data.repeatPassword) {
            // check pass
            if(data.password.length <= 8 || data.password.length >= 20 || data.repeatPassword.length <= 8 || data.repeatPassword.length >= 20) {
                this.setState({
                    errorMessage: "*Your password must be between 8-20 characters*"
                });
                return;
            }
        } else {
            this.setState({
                errorMessage: ""
            });
            return;
        } 
    }

    handleRegister = async(email, password, repeatPassword) => {
        this.handleValidation({
            email: email,
            password: password,
            repeatPassword: repeatPassword
        });
        // const data = await axios.get("https://web-on-tap-be.herokuapp.com/user/signup/")
        this.setState({
            registerSuccess: true
        })
    }

    handleLogout = () => {
        this.setState({
            loginSuccess: false,
            user: "",
            logout: true
        })
    }

    setLogout = (e) => {
        this.setState({
            logout: e
        })
    }

    setLoginFailed = (e) => {
        this.setState({
            loginFailed: e
        })
    }

    render(){
        return(
            <CourseContext.Provider value = {{
                ...this.state,
                handleStatus: this.handleStatus,
                handleTimer: this.handleTimer,
                handleSubmit: this.handleSubmit,
                handleReset: this.handleReset,
                handleLoadChapter: this.handleLoadChapter,
                handleLoadLesson: this.handleLoadLesson,
                handleLoadExam: this.handleLoadExam,
                handleLogin: this.handleLogin,
                handleRegister: this.handleRegister,
                handleLogout: this.handleLogout,
                setLoginFailed: this.setLoginFailed,
                setLogout: this.setLogout
            }} >
                 {this.props.children}   
            </CourseContext.Provider>
        )
    }
}

const CourseConsumer = CourseContext.Consumer;


export {CourseProvider, CourseConsumer, CourseContext};
