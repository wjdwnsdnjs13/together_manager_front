import React, { useState } from "react";
import logo from "../../assets/together_logo.png"
import './Login.css';

import { Link } from "react-router-dom";
import NaverAdminLogin from "../../components/Tool/NaverAdminLogin";

function Login(props) {
    const [check, setCheck] = useState("봉사자");
    // 값: 1 -> 봉사자
    // 값: 2 -> 기관

    let signInComponent = (
        <>
            <NaverAdminLogin name="관리자 로그인" />
        </>
    );


    return (
        <>
            <div className="body_SignIn">
                <div className='logoBox'>
                    <Link to="/">
                        <img src={logo} className='logo' alt="together" />
                    </Link>
                </div>
                <div className="login_wrapper">
                    <h2 className="text_login">관리자 로그인</h2>
                    <br />


                    {signInComponent}

                    <div className="goSignUp">
                        <p>아직 회원이 아닌가요?</p>
                        <Link to='/Register'><h5 className="goSignUp_h5">회원가입하기</h5></Link>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Login;