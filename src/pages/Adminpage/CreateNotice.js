
import { Link, Outlet, Route, useLocation, useNavigate } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useState } from 'react';
import { AccountCircle } from "@mui/icons-material";
import './NoticeUpdate.css';

function CreateNotice() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [notTitle, setNotTitle] = useState("");
    const [notContent, setNotContent] = useState("");
    const menuId = 'primary-search-account-menu';
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const noticeTitle = (e) => {
        setNotTitle(e.target.value);
    }
    const noticeContent = (e) => {
        setNotContent(e.target.value);
    }

    //공지 생성 통신
    const noticeCreate = useCallback(() => {

        console.log("공지사항 생성");

        try {
            axios.get('/together/manager/create/notice', { params: { notWriter: "정준원", notTitle: notTitle, notContent: notContent } })
                .then((response) => {
                    navigate('/AdminPage/ManNotice');
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (err) {
            console.log("Error >>", err);
        }
    }, []);


    return (

        <>
            <Outlet />
            <div className="AdminPage_body">
                <div className="AdminPage_main">
                    {/* 네비게이션 */}
                    <div className="AdminPage_navigation">
                        <ul>
                            <Link to="/AdminPage" className="main_title">
                                <p className="main_title">TOGETHER</p>
                            </Link>
                            <li>
                                <a href="/AdminPage">
                                    <span className="icon"></span>
                                    <span className="title">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <Link to="/AdminPage/UserManagement">
                                    <span className="icon"></span>
                                    <span className="title">유저관리</span></Link>
                            </li>
                            <li>
                                <Link to="/AdminPage/ManNotice">
                                    <span className="icon"></span>
                                    <span className="title">공지사항</span></Link>

                            </li>
                            <li>
                                <Link to="/AdminPage/OrgCertified">
                                    <span className="icon"></span>
                                    <span className="title">기관인증</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* main */}
                    <div className="Adminpage_dashboard">
                        <div className="dashboard_topbar">
                            <div className="Admin_title">
                                <Typography
                                    style={{ fontWeight: 'bold', fontSize: '20px' }}></Typography>
                            </div>

                            {/* 관리자 계정 표시 */}
                            <div className="Admin_user">
                                <Typography>관리자님</Typography>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit">
                                    <AccountCircle />
                                </IconButton>
                            </div>
                        </div>

                        <div className="detail">
                            제목 : <br />
                            <input className="notTitle" onChange={noticeTitle}></input><br />
                            본문 :<br />
                            <input className="notContent" onChange={noticeContent}></input><br />
                            <button onClick={() => noticeCreate()}>글 작성</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateNotice;