/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Dropdown } from "react-bootstrap";

import Course from './components/Course';
import Exercise from './components/Exercise';

import fb from './images/fb.png';
import ig from './images/instagram.png';
import yt from './images/youtube.png';
import ListChapter from './components/ListChapter';
import DetailsChapter from './components/DetailsChapter';
import Login from "./components/Login";
import Register from "./components/Register";
import { useContext, useEffect } from 'react';
import { CourseContext } from './context';
import Home from "./components/Home";
import PrivateRouter from "./PrivateRouter";
import avar_test from "./assets/image/test.jpg";
import { AiOutlineUser, AiFillSetting } from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";

function App() {
  const context = useContext(CourseContext);
  const {user, isLogout, handleLogout, setStatusLogout} = context;
  useEffect(() => {
    if(isLogout) {
      window.location.reload(false);
      setStatusLogout(false)
    }
  })
  return (
    <Router>
    <div className="container-page">
      <div className="header">
        <div className="header-left"></div>
        <div className="header-mid">
          <div className="logo"><Link to ="/"><svg width="57" height="69" viewBox="0 0 57 69" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.421 6.36841C23.167 6.36841 18.8683 10.6671 18.8683 15.921C18.8683 17.5259 19.26 19.0177 19.9637 20.3487C17.0581 19.6402 13.5189 19.1052 9.3157 19.1052H7.27621L12.8486 41.3947H14.092C19.5147 41.3947 22.8486 42.1717 24.7894 42.8881C25.7606 43.2479 26.3751 43.603 26.7302 43.8322C27.0836 44.0631 27.1282 44.0822 27.1282 44.0822L27.574 44.5789H29.2664L29.7154 44.0806C29.7154 44.0806 29.7583 44.0631 30.1134 43.8322C30.4668 43.603 31.083 43.2479 32.0526 42.8881C33.9933 42.1717 37.3272 41.3947 42.7499 41.3947H43.9934L49.5657 19.1052H47.5262C43.3406 19.1052 39.8077 19.6084 36.9292 20.2993C37.6138 18.9874 37.9736 17.5004 37.9736 15.921C37.9736 10.6671 33.6749 6.36841 28.421 6.36841ZM28.421 9.55262C31.9602 9.55262 34.7894 12.3818 34.7894 15.921C34.7894 19.4603 31.9602 22.2895 28.421 22.2895C24.8817 22.2895 22.0525 19.4603 22.0525 15.921C22.0525 12.3818 24.8817 9.55262 28.421 9.55262ZM11.4045 22.4885C16.356 22.7305 20.3984 23.5886 23.0476 24.5789C25.181 25.375 26.2318 25.9895 26.8289 26.3684V40.2993C26.5423 40.1688 26.2812 40.0335 25.9325 39.9013C23.7816 39.1053 20.2487 38.435 15.3355 38.3092L11.4045 22.4885ZM45.4358 22.4885L41.5065 38.3108C36.5933 38.435 33.0604 39.1069 30.9078 39.9029C30.5608 40.0335 30.2997 40.1688 30.0131 40.3009V26.37C30.6101 25.9831 31.6545 25.3622 33.745 24.5789C36.3751 23.5886 40.4239 22.7321 45.4358 22.4885Z" fill="#FFE040"/><path d="M7.22461 64V51.2031H7.09277L1.52051 53.2158V55.3428L4.75488 54.1826V64H7.22461ZM13.7285 62.0576H13.5615V64.1055H13.7461C14.877 64.1055 15.8496 63.9326 16.6641 63.5869C17.4785 63.2354 18.1494 62.7461 18.6768 62.1191C19.2041 61.498 19.5938 60.7598 19.8457 59.9043C20.0977 59.0488 20.2236 58.1113 20.2236 57.0918V56.248C20.2236 55.4863 20.124 54.7861 19.9248 54.1475C19.7314 53.5088 19.4502 52.958 19.0811 52.4951C18.7061 52.0322 18.252 51.6719 17.7188 51.4141C17.1855 51.1562 16.585 51.0273 15.917 51.0273C15.2607 51.0273 14.6689 51.1475 14.1416 51.3877C13.6201 51.6221 13.1748 51.9443 12.8057 52.3545C12.4365 52.7646 12.1523 53.2451 11.9531 53.7959C11.7598 54.3408 11.6631 54.9238 11.6631 55.5449C11.6631 56.1484 11.7422 56.7139 11.9004 57.2412C12.0645 57.7627 12.3047 58.2168 12.6211 58.6035C12.9316 58.9902 13.3184 59.2949 13.7812 59.5176C14.2441 59.7402 14.7803 59.8516 15.3896 59.8516C15.6768 59.8516 15.9404 59.8281 16.1807 59.7812C16.4209 59.7285 16.6377 59.6582 16.8311 59.5703C17.0127 59.4941 17.1797 59.4033 17.332 59.2979C17.4844 59.1924 17.6221 59.0781 17.7451 58.9551V59.0078C17.6865 59.4766 17.5664 59.9014 17.3848 60.2822C17.209 60.6572 16.9629 60.9736 16.6465 61.2314C16.3184 61.501 15.9141 61.7061 15.4336 61.8467C14.9531 61.9873 14.3848 62.0576 13.7285 62.0576ZM15.9697 57.9619C15.6533 57.9619 15.3779 57.8975 15.1436 57.7686C14.9092 57.6338 14.7158 57.4551 14.5635 57.2324C14.4053 57.0098 14.2881 56.749 14.2119 56.4502C14.1357 56.1514 14.0977 55.8379 14.0977 55.5098C14.0977 55.1816 14.1387 54.8682 14.2207 54.5693C14.3027 54.2646 14.4199 53.9951 14.5723 53.7607C14.7246 53.5322 14.9121 53.3506 15.1348 53.2158C15.3633 53.0752 15.6211 53.0049 15.9082 53.0049C16.1719 53.0049 16.418 53.0635 16.6465 53.1807C16.875 53.2979 17.0742 53.4736 17.2441 53.708C17.4141 53.9424 17.5459 54.2354 17.6396 54.5869C17.7393 54.9385 17.7891 55.3486 17.7891 55.8174V56.6875C17.7188 56.8691 17.625 57.0391 17.5078 57.1973C17.3965 57.3496 17.2646 57.4814 17.1123 57.5928C16.9541 57.71 16.7783 57.8008 16.585 57.8652C16.3975 57.9297 16.1924 57.9619 15.9697 57.9619ZM31.2188 64V51.2031H28.7754V56.4502H25.1543V51.2031H22.7021V64H25.1543V58.4541H28.7754V64H31.2188ZM42.4688 59.9922H39.999C39.9756 60.3789 39.9111 60.71 39.8057 60.9854C39.7002 61.2607 39.5566 61.4863 39.375 61.6621C39.1934 61.8379 38.9736 61.9668 38.7158 62.0488C38.458 62.1309 38.168 62.1719 37.8457 62.1719C37.6055 62.1719 37.3857 62.1455 37.1865 62.0928C36.9932 62.0342 36.8174 61.9463 36.6592 61.8291C36.5127 61.7236 36.3809 61.5918 36.2637 61.4336C36.1523 61.2754 36.0557 61.0938 35.9736 60.8887C35.8564 60.5898 35.7686 60.2412 35.71 59.8428C35.6572 59.4385 35.6309 58.9814 35.6309 58.4717V56.7314C35.6309 56.3564 35.6484 56.0078 35.6836 55.6855C35.7188 55.3574 35.7744 55.0586 35.8506 54.7891C35.9502 54.4434 36.082 54.1416 36.2461 53.8838C36.416 53.6201 36.6211 53.418 36.8613 53.2773C37.002 53.1953 37.1543 53.1338 37.3184 53.0928C37.4883 53.0518 37.6699 53.0312 37.8633 53.0312C38.2266 53.0312 38.5371 53.0811 38.7949 53.1807C39.0586 53.2744 39.2783 53.415 39.4541 53.6025C39.624 53.7959 39.7529 54.0361 39.8408 54.3232C39.9346 54.6104 39.9932 54.9443 40.0166 55.3252H42.4775C42.4189 54.6572 42.2783 54.0566 42.0557 53.5234C41.833 52.9902 41.5283 52.5391 41.1416 52.1699C40.7549 51.8008 40.2861 51.5166 39.7354 51.3174C39.1904 51.1182 38.5664 51.0186 37.8633 51.0186C37.3887 51.0186 36.9434 51.0801 36.5273 51.2031C36.1172 51.3203 35.7393 51.4902 35.3936 51.7129C35.0068 51.9766 34.6611 52.2988 34.3564 52.6797C34.0518 53.0605 33.8057 53.4941 33.6182 53.9805C33.4541 54.3789 33.3311 54.8125 33.249 55.2812C33.167 55.7441 33.126 56.2334 33.126 56.749V58.4717C33.126 59.0225 33.1699 59.5439 33.2578 60.0361C33.3516 60.5283 33.4834 60.9795 33.6533 61.3896C33.8291 61.7998 34.043 62.1748 34.2949 62.5146C34.5527 62.8545 34.8457 63.1445 35.1738 63.3848C35.5312 63.6426 35.9326 63.8418 36.3779 63.9824C36.8291 64.1172 37.3184 64.1846 37.8457 64.1846C38.5137 64.1846 39.123 64.0879 39.6738 63.8945C40.2246 63.6953 40.6992 63.4141 41.0977 63.0508C41.4961 62.6875 41.8125 62.248 42.0469 61.7324C42.2871 61.2168 42.4277 60.6367 42.4688 59.9922ZM44.376 64H49.043C49.7461 64 50.3789 63.9209 50.9414 63.7627C51.5039 63.6045 51.9814 63.3672 52.374 63.0508C52.7666 62.7344 53.0684 62.3418 53.2793 61.873C53.4902 61.4043 53.5957 60.8623 53.5957 60.2471C53.5957 59.9248 53.5518 59.6143 53.4639 59.3154C53.3818 59.0107 53.2529 58.7295 53.0771 58.4717C52.9072 58.2314 52.6963 58.0205 52.4443 57.8389C52.1982 57.6572 51.8643 57.5078 51.4424 57.3906V57.3818C51.6592 57.2998 51.8555 57.2002 52.0312 57.083C52.2129 56.9658 52.374 56.8369 52.5146 56.6963C52.7725 56.4385 52.9658 56.1396 53.0947 55.7998C53.2295 55.4541 53.2998 55.0879 53.3057 54.7012C53.3057 54.1035 53.1943 53.585 52.9717 53.1455C52.7549 52.7061 52.4443 52.3428 52.04 52.0557C51.6357 51.7686 51.1465 51.5547 50.5723 51.4141C50.0039 51.2734 49.3711 51.2031 48.6738 51.2031H44.376V64ZM46.8545 58.3574H49.1572C49.5029 58.3633 49.8018 58.4102 50.0537 58.498C50.3057 58.5859 50.5107 58.7119 50.6689 58.876C50.8271 59.0342 50.9414 59.2275 51.0117 59.4561C51.0879 59.6846 51.126 59.9424 51.126 60.2295C51.126 60.5049 51.0762 60.7539 50.9766 60.9766C50.8828 61.1992 50.7422 61.3896 50.5547 61.5479C50.3848 61.6885 50.1709 61.7998 49.9131 61.8818C49.6611 61.9639 49.374 62.0049 49.0518 62.0049H46.8545V58.3574ZM46.8545 56.5732V53.2158H48.6826C49.0811 53.2217 49.4268 53.2656 49.7197 53.3477C50.0186 53.4297 50.2559 53.5615 50.4316 53.7432C50.5664 53.8721 50.666 54.0332 50.7305 54.2266C50.8008 54.4199 50.8359 54.6455 50.8359 54.9033C50.8359 55.1494 50.7949 55.3691 50.7129 55.5625C50.6367 55.7559 50.5254 55.9199 50.3789 56.0547C50.2031 56.2246 49.9717 56.3535 49.6846 56.4414C49.3975 56.5234 49.0664 56.5674 48.6914 56.5732H46.8545Z" fill="#FFE040"/></svg></Link></div>
          {/* <div ><Link to="/khoahoc" className="btn-src">KHÓA HỌC</Link></div>
          {
            user.auth ? 
              <div ><Link className="btn-login" onClick={() => handleLogout()}>ĐĂNG XUẤT</Link></div>
            :
            <>  
              <div ><Link to="/dangnhap" className="btn-login">ĐĂNG NHẬP</Link></div>
              <div ><Link to="/dangky" className="btn-register">ĐĂNG KÝ</Link></div>
            </>
          }   */}
          <div ><Link to="/khoahoc" className="btn-src">CÁC KHÓA HỌC</Link></div>
          {
            loginSuccess ? 
              <div style={{display: 'flex'}}>
                  <img className="avarUser" src={avar_test} alt=""/>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1"> <AiOutlineUser /> Hồ sơ</Dropdown.Item>
                      <Dropdown.Item href="#/action-2"> <AiFillSetting /> Cài đặt</Dropdown.Item>
                      <Dropdown.Item href="#/action-3" onClick={() => handleLogout()}> <IoLogOut /> Thoát</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
              </div>
            : <div style={{display: 'flex'}}>
                <div style={{paddingRight: '30px'}}><Link to="/dangnhap" className="btn-login">ĐĂNG NHẬP</Link></div>
                <div ><Link to="/dangky" className="btn-register">ĐĂNG KÝ</Link></div>
              </div>
          }
        </div>
        <div className="header-right"></div>
      </div>
      
      <Switch>
      <div className="contain">
        <PrivateRouter exact path="/" component={Course} />

        <PrivateRouter exact path="/khoahoc/:name/:idChapter/:idLesson" component={Exercise} />
        
        <PrivateRouter exact path="/khoahoc" component={Course} />

        <PrivateRouter exact path="/khoahoc/:name/:id" component={DetailsChapter} />

        <PrivateRouter exact path="/khoahoc/:name" component={ListChapter} />

        <Route exact path="/dangnhap" component={Login} />

        <Route exact path="/dangky" component={Register} />
      </div>
      </Switch>
      <div className="footer">
        <div className="footer-top"></div>
        <div className="footer-bottom">
          <div className="footer_left"></div>
          <div className="footer_mid">
            <div className="ft_bt_left">
              <Link to="gioithieu">Giới thiệu</Link>
              <Link to="diendan">Diễn đàn</Link>
              <Link to="doingu">Đội ngũ</Link>
            </div>
            <div className="ft_bt_mid">
              <Link to ="/"><svg width="57" height="69" viewBox="0 0 57 69" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.421 6.36841C23.167 6.36841 18.8683 10.6671 18.8683 15.921C18.8683 17.5259 19.26 19.0177 19.9637 20.3487C17.0581 19.6402 13.5189 19.1052 9.3157 19.1052H7.27621L12.8486 41.3947H14.092C19.5147 41.3947 22.8486 42.1717 24.7894 42.8881C25.7606 43.2479 26.3751 43.603 26.7302 43.8322C27.0836 44.0631 27.1282 44.0822 27.1282 44.0822L27.574 44.5789H29.2664L29.7154 44.0806C29.7154 44.0806 29.7583 44.0631 30.1134 43.8322C30.4668 43.603 31.083 43.2479 32.0526 42.8881C33.9933 42.1717 37.3272 41.3947 42.7499 41.3947H43.9934L49.5657 19.1052H47.5262C43.3406 19.1052 39.8077 19.6084 36.9292 20.2993C37.6138 18.9874 37.9736 17.5004 37.9736 15.921C37.9736 10.6671 33.6749 6.36841 28.421 6.36841ZM28.421 9.55262C31.9602 9.55262 34.7894 12.3818 34.7894 15.921C34.7894 19.4603 31.9602 22.2895 28.421 22.2895C24.8817 22.2895 22.0525 19.4603 22.0525 15.921C22.0525 12.3818 24.8817 9.55262 28.421 9.55262ZM11.4045 22.4885C16.356 22.7305 20.3984 23.5886 23.0476 24.5789C25.181 25.375 26.2318 25.9895 26.8289 26.3684V40.2993C26.5423 40.1688 26.2812 40.0335 25.9325 39.9013C23.7816 39.1053 20.2487 38.435 15.3355 38.3092L11.4045 22.4885ZM45.4358 22.4885L41.5065 38.3108C36.5933 38.435 33.0604 39.1069 30.9078 39.9029C30.5608 40.0335 30.2997 40.1688 30.0131 40.3009V26.37C30.6101 25.9831 31.6545 25.3622 33.745 24.5789C36.3751 23.5886 40.4239 22.7321 45.4358 22.4885Z" fill="#FFE040"/><path d="M7.22461 64V51.2031H7.09277L1.52051 53.2158V55.3428L4.75488 54.1826V64H7.22461ZM13.7285 62.0576H13.5615V64.1055H13.7461C14.877 64.1055 15.8496 63.9326 16.6641 63.5869C17.4785 63.2354 18.1494 62.7461 18.6768 62.1191C19.2041 61.498 19.5938 60.7598 19.8457 59.9043C20.0977 59.0488 20.2236 58.1113 20.2236 57.0918V56.248C20.2236 55.4863 20.124 54.7861 19.9248 54.1475C19.7314 53.5088 19.4502 52.958 19.0811 52.4951C18.7061 52.0322 18.252 51.6719 17.7188 51.4141C17.1855 51.1562 16.585 51.0273 15.917 51.0273C15.2607 51.0273 14.6689 51.1475 14.1416 51.3877C13.6201 51.6221 13.1748 51.9443 12.8057 52.3545C12.4365 52.7646 12.1523 53.2451 11.9531 53.7959C11.7598 54.3408 11.6631 54.9238 11.6631 55.5449C11.6631 56.1484 11.7422 56.7139 11.9004 57.2412C12.0645 57.7627 12.3047 58.2168 12.6211 58.6035C12.9316 58.9902 13.3184 59.2949 13.7812 59.5176C14.2441 59.7402 14.7803 59.8516 15.3896 59.8516C15.6768 59.8516 15.9404 59.8281 16.1807 59.7812C16.4209 59.7285 16.6377 59.6582 16.8311 59.5703C17.0127 59.4941 17.1797 59.4033 17.332 59.2979C17.4844 59.1924 17.6221 59.0781 17.7451 58.9551V59.0078C17.6865 59.4766 17.5664 59.9014 17.3848 60.2822C17.209 60.6572 16.9629 60.9736 16.6465 61.2314C16.3184 61.501 15.9141 61.7061 15.4336 61.8467C14.9531 61.9873 14.3848 62.0576 13.7285 62.0576ZM15.9697 57.9619C15.6533 57.9619 15.3779 57.8975 15.1436 57.7686C14.9092 57.6338 14.7158 57.4551 14.5635 57.2324C14.4053 57.0098 14.2881 56.749 14.2119 56.4502C14.1357 56.1514 14.0977 55.8379 14.0977 55.5098C14.0977 55.1816 14.1387 54.8682 14.2207 54.5693C14.3027 54.2646 14.4199 53.9951 14.5723 53.7607C14.7246 53.5322 14.9121 53.3506 15.1348 53.2158C15.3633 53.0752 15.6211 53.0049 15.9082 53.0049C16.1719 53.0049 16.418 53.0635 16.6465 53.1807C16.875 53.2979 17.0742 53.4736 17.2441 53.708C17.4141 53.9424 17.5459 54.2354 17.6396 54.5869C17.7393 54.9385 17.7891 55.3486 17.7891 55.8174V56.6875C17.7188 56.8691 17.625 57.0391 17.5078 57.1973C17.3965 57.3496 17.2646 57.4814 17.1123 57.5928C16.9541 57.71 16.7783 57.8008 16.585 57.8652C16.3975 57.9297 16.1924 57.9619 15.9697 57.9619ZM31.2188 64V51.2031H28.7754V56.4502H25.1543V51.2031H22.7021V64H25.1543V58.4541H28.7754V64H31.2188ZM42.4688 59.9922H39.999C39.9756 60.3789 39.9111 60.71 39.8057 60.9854C39.7002 61.2607 39.5566 61.4863 39.375 61.6621C39.1934 61.8379 38.9736 61.9668 38.7158 62.0488C38.458 62.1309 38.168 62.1719 37.8457 62.1719C37.6055 62.1719 37.3857 62.1455 37.1865 62.0928C36.9932 62.0342 36.8174 61.9463 36.6592 61.8291C36.5127 61.7236 36.3809 61.5918 36.2637 61.4336C36.1523 61.2754 36.0557 61.0938 35.9736 60.8887C35.8564 60.5898 35.7686 60.2412 35.71 59.8428C35.6572 59.4385 35.6309 58.9814 35.6309 58.4717V56.7314C35.6309 56.3564 35.6484 56.0078 35.6836 55.6855C35.7188 55.3574 35.7744 55.0586 35.8506 54.7891C35.9502 54.4434 36.082 54.1416 36.2461 53.8838C36.416 53.6201 36.6211 53.418 36.8613 53.2773C37.002 53.1953 37.1543 53.1338 37.3184 53.0928C37.4883 53.0518 37.6699 53.0312 37.8633 53.0312C38.2266 53.0312 38.5371 53.0811 38.7949 53.1807C39.0586 53.2744 39.2783 53.415 39.4541 53.6025C39.624 53.7959 39.7529 54.0361 39.8408 54.3232C39.9346 54.6104 39.9932 54.9443 40.0166 55.3252H42.4775C42.4189 54.6572 42.2783 54.0566 42.0557 53.5234C41.833 52.9902 41.5283 52.5391 41.1416 52.1699C40.7549 51.8008 40.2861 51.5166 39.7354 51.3174C39.1904 51.1182 38.5664 51.0186 37.8633 51.0186C37.3887 51.0186 36.9434 51.0801 36.5273 51.2031C36.1172 51.3203 35.7393 51.4902 35.3936 51.7129C35.0068 51.9766 34.6611 52.2988 34.3564 52.6797C34.0518 53.0605 33.8057 53.4941 33.6182 53.9805C33.4541 54.3789 33.3311 54.8125 33.249 55.2812C33.167 55.7441 33.126 56.2334 33.126 56.749V58.4717C33.126 59.0225 33.1699 59.5439 33.2578 60.0361C33.3516 60.5283 33.4834 60.9795 33.6533 61.3896C33.8291 61.7998 34.043 62.1748 34.2949 62.5146C34.5527 62.8545 34.8457 63.1445 35.1738 63.3848C35.5312 63.6426 35.9326 63.8418 36.3779 63.9824C36.8291 64.1172 37.3184 64.1846 37.8457 64.1846C38.5137 64.1846 39.123 64.0879 39.6738 63.8945C40.2246 63.6953 40.6992 63.4141 41.0977 63.0508C41.4961 62.6875 41.8125 62.248 42.0469 61.7324C42.2871 61.2168 42.4277 60.6367 42.4688 59.9922ZM44.376 64H49.043C49.7461 64 50.3789 63.9209 50.9414 63.7627C51.5039 63.6045 51.9814 63.3672 52.374 63.0508C52.7666 62.7344 53.0684 62.3418 53.2793 61.873C53.4902 61.4043 53.5957 60.8623 53.5957 60.2471C53.5957 59.9248 53.5518 59.6143 53.4639 59.3154C53.3818 59.0107 53.2529 58.7295 53.0771 58.4717C52.9072 58.2314 52.6963 58.0205 52.4443 57.8389C52.1982 57.6572 51.8643 57.5078 51.4424 57.3906V57.3818C51.6592 57.2998 51.8555 57.2002 52.0312 57.083C52.2129 56.9658 52.374 56.8369 52.5146 56.6963C52.7725 56.4385 52.9658 56.1396 53.0947 55.7998C53.2295 55.4541 53.2998 55.0879 53.3057 54.7012C53.3057 54.1035 53.1943 53.585 52.9717 53.1455C52.7549 52.7061 52.4443 52.3428 52.04 52.0557C51.6357 51.7686 51.1465 51.5547 50.5723 51.4141C50.0039 51.2734 49.3711 51.2031 48.6738 51.2031H44.376V64ZM46.8545 58.3574H49.1572C49.5029 58.3633 49.8018 58.4102 50.0537 58.498C50.3057 58.5859 50.5107 58.7119 50.6689 58.876C50.8271 59.0342 50.9414 59.2275 51.0117 59.4561C51.0879 59.6846 51.126 59.9424 51.126 60.2295C51.126 60.5049 51.0762 60.7539 50.9766 60.9766C50.8828 61.1992 50.7422 61.3896 50.5547 61.5479C50.3848 61.6885 50.1709 61.7998 49.9131 61.8818C49.6611 61.9639 49.374 62.0049 49.0518 62.0049H46.8545V58.3574ZM46.8545 56.5732V53.2158H48.6826C49.0811 53.2217 49.4268 53.2656 49.7197 53.3477C50.0186 53.4297 50.2559 53.5615 50.4316 53.7432C50.5664 53.8721 50.666 54.0332 50.7305 54.2266C50.8008 54.4199 50.8359 54.6455 50.8359 54.9033C50.8359 55.1494 50.7949 55.3691 50.7129 55.5625C50.6367 55.7559 50.5254 55.9199 50.3789 56.0547C50.2031 56.2246 49.9717 56.3535 49.6846 56.4414C49.3975 56.5234 49.0664 56.5674 48.6914 56.5732H46.8545Z" fill="#FFE040"/></svg></Link>
              <div className="icon_footer">
                <a href="#"><img src={fb} alt=""/></a>
                <a href="#"><img src={ig} alt=""/></a>
                <a href="#"><img src={yt} alt=""/></a>
              </div>
              <p>Sản phẩm do team 19HCB thực hiện</p>
            </div>
            <div className="ft_bt_right">
              <Link to="lienhe">Liên hệ</Link>
              <Link to="trogiup">Trợ giúp</Link>
            </div>
            </div>
          <div className="footer_right"></div>
          
            
          
        </div>
      </div>
    </div>
    
    </Router>
  );
}


export default App;