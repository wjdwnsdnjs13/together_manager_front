import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';

import NaverAdminLogin from '../../components/Tool/NaverAdminLogin';
import logo from '../../assets/together_logo.png';

function Register(props) {

    // // 확인 자체가 필요 없어 보여서 삭제
    // const [check, setCheck] = useState("봉사자");
    // // 값: 1 -> 봉사자
    // // 값: 2 -> 기관

    // let signUpComponent = null
    // if (check === "봉사자") {
    //     signUpComponent = (
    //         <>
    //             <NaverVolSignIn name="봉사자 로그인" />
    //         </>
    //     )
    // } else if (check === "기관") {
    //     signUpComponent = (
    //         <>
    //             <NaverOrgSignUp name="기관 회원가입" />
    //         </>
    //     )
    // }

    return (
        <>
            <div className="body_SignIn">
                <div className='logoBox'>
                    <Link to="/">
                        <img src={logo} className='logo' alt="together" />
                    </Link>
                </div>
                <div className="login_wrapper">
                    <h2 className="text_login">회원가입</h2>
                    <br />
                    {/* 확인 여부 자체가 필요 없을 거 같아서 삭제함.
                     <label style={{ margin: '10px' }}>
                        <input
                            type="radio"
                            value="봉사자"
                            name="회원가입"
                            onChange={() => { setCheck("봉사자") }}
                            defaultChecked
                        />
                        봉사자
                    </label>
                    <label style={{ margin: '10px' }}>
                        <input
                            type="radio"
                            value="기관"
                            name="회원가입"
                            onChange={() => { setCheck("기관") }}
                        />
                        기관
                    </label> */}
                    <NaverAdminLogin name="관리자 회원가입" />

                    <div className="goSignUp">
                        <p>이미 가입을 하셨나요?</p>
                        <Link to='/'><h5 className="goSignUp_h5">로그인으로 돌아가기</h5></Link>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Register;