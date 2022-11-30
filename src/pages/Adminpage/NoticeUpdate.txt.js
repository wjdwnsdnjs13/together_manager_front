/* eslint-disable */
import { Link, Outlet, Route, useLocation, useNavigate } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from 'react';
import { AccountCircle } from "@mui/icons-material";
import axios from 'axios';
import './NoticeUpdate.css';

function NoticeUpdate() {
    const navigate = useNavigate();
    const location = useLocation();
    const noticeInfomation = location.state.data;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const menuId = 'primary-search-account-menu';


    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };


    //공지 수정 통신
    const noticeUpdate = useCallback(() => {

        console.log("공지사항 수정");
        let title = document.getElementById("title").value;
        console.log("title : " + title);
        let content = document.getElementById("content").value;
        console.log("content : " + content);
        if (title != "" && content != "") {
            try {
                axios.get('/together/manager/update/notice', { params: { notId: noticeInfomation.notId, notTitle: title, notContent: content } })
                    .then((response) => {
                        navigate('/AdminPage/ManNotice');
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (err) {
                console.log("Error >>", err);
            }

        } else {
            confirm("제목과 내용을 채워주세요.")
            console.log(updateTitle);
            console.log(updateContent);
        }
    }, []);

    useEffect(() => {
        document.getElementById("title").value = noticeInfomation.notTitle;
        document.getElementById("content").value = noticeInfomation.notContent;
        
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
                            <br />
                            <div className="volun_name">
                                제목 : <br />
                                <input className="notTitle" id="title"></input><br />
                                본문 :<br />
                                <textarea className="notContent" type='text' id="content"></textarea><br />
                                <button onClick={() => noticeUpdate()}>수정하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NoticeUpdate;