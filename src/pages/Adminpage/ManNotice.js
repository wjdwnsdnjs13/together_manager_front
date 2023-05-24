/* eslint-disable */
import { Link, Outlet, Route, useNavigate } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useState } from 'react';
import { AccountCircle } from "@mui/icons-material";

import './ManNotice.css'

function ManNotice() {

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [noticeData, setNoticeData] = useState({});
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  //최초 통신
  const firstNotice = useCallback(() => {

    console.log("접속 시 공지사항 호출");

    try {

      let notice_data; // 공지사항 넣는 곳
      // 최근 봉사 목록을 가져오는 통신
      axios.get("/together/find/all/notice")
        .then((response) => {
          // console.log(response.data);
          notice_data = response.data;
          console.log(typeof (notice_data));
          if (notice_data != null) { // 데이터 성공

            let exList = [];
            for (let i = 0; i < notice_data.length; i++) {
              exList.push(notice_data[i]);
            }
            console.log(exList);
            for (let i = 0; i < notice_data.length; i++) {
              if (notice_data[i].notWriter == "sRLzo1nPwTKhYsW7e_dcK7OxeTd8vUXGQBIPVfXUnqA") {
                notice_data[i].notWriterName = "정준원";

                // // content 길이 자르기
                // if(notice_data[i].notContent.length > 20){
                //   notice_data[i].notContentTrans = notice_data[i].notContent.substring(0, 21) + "...";
                // } else{
                //   notice_data[i].notContentTrans = notice_data[i].notContent;
                // }
                
                // 날짜 포멧 변경
                let a = new Date(notice_data[i].notWriTime).toISOString().substring(2,10).replace(/-/g,'.');
                let b = new Date(notice_data[i].notWriTime).toISOString().substring(11,13) + "시";
                let c = new Date(notice_data[i].notWriTime).toISOString().substring(14,16) + "분";
                notice_data[i].notWriTimeTrans  = a + " " + b + c;
                
                
              }
            }
            setNoticeData(notice_data);

          } else { // 데이터 실패

            // 오류 출력
            alert("[실패] 봉사 데이터를 받지 못하였습니다.");

          }
        })
        .catch((error) => {
          console.log(error);
        });



    } catch (err) {
      console.log("Error >>", err);
    }
  }, []);

  useEffect(() => {
    firstNotice();
  }, []);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  let listLoding = null;
  if (noticeData.length === 0) {
    noticeComponent = (
      <div>공지사항이 없습니다!</div>
    )
  } else if (noticeData.length > 0) {
    listLoding = (
      <>
        {noticeData.map(data => (
          <tr onClick={() => { navigate('/AdminPage/NoticeUpdate', { state: { data } }) }}>
            <td className="notTitleColumn">{data.notTitle}</td>
            <td className="notWriterNameColumn">{data.notWriterName}</td>
            {/* <td className="notContentColumn">{data.notContentTrans}</td>s */}
            <td className="notWriTimeTransColumn">{data.notWriTimeTrans}</td>
          </tr>
        ))}
      </>
    )
  }


  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const menuId = 'primary-search-account-menu';

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
              {/* <li>
                <a href="/AdminPage">
                  <span className="icon"></span>
                  <span className="title">Dashboard</span>
                </a>
              </li> */}
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
            </div><br/>
            <table className="notTable">
              <thead>
                <tr>
                  <th className='notTitleColumn'>제목</th>
                  <th className='notWriterColumn'>작성자</th>
                  {/* <th className='notContentColumn'>내용</th> */}
                  <th className='notWriTimeTransColumn'>작성시간</th>
                </tr>
              </thead>
              <tbody>
                {listLoding}
              </tbody>
            </table><br/>
            
            <button className="notWriteButton">
            <Link
              to='/AdminPage/NoticeCreate'
              style={{
                textDecoration: 'none',
                color: 'black'
                
              }}
            >글쓰기</Link></button>

          </div>
        </div>
      </div>
    </>
  );
}

export default ManNotice;