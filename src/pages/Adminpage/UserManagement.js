
import React, { useCallback, useEffect, useState } from 'react';
import './UserManagement.css';
import { Link, Outlet, Route } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import axios from "axios";
import { AccountCircle } from "@mui/icons-material";

function UserManagement(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [temporarySer, setTemporarySer] = useState([]);
  const [temporaryOrg, setTemporaryOrg] = useState([]);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //최초 통신
  const findAllUsers = useCallback(() => {

    console.log("접속 시 공지사항 호출");

    try {

      let allSer; // 유저 넣는 곳
      let allOrg;
      // 전체 유저 가져오는 통신
      axios.get("/together/manager/find/all/users")
        .then((response) => {
          console.log(response.data);
          allSer = response.data.servant; //이 친구는 배열
          allOrg = response.data.organization;
          if (allSer != null && allOrg != null) { // 데이터 성공
            setTemporarySer(allSer);
            setTemporaryOrg(allOrg);

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
    findAllUsers();
  }, []);

  const isMenuOpen = Boolean(anchorEl);

  const menuId = 'primary-search-account-menu';

  let serListLoding = null;
  if (temporarySer.length === 0) {
    serListLoding = (
      <div>봉사자가 없습니다!</div>
    )
  } else if (temporarySer.length > 0) {
    serListLoding = (
      <>
        {temporarySer.map(data => (
            <tr key={data.serId}>
              <td className="serNameColumn">{data.serName}</td>
              <td class='serMobileColumn'>{data.serMobile}</td>
              <td class='serEmailColumn'>{data.serEmail}</td>
            </tr>
        ))}
      </>
    )
  }
  let orgListLoding = null;
  if (temporaryOrg.length === 0) {
    orgListLoding = (
      <div>봉사자가 없습니다!</div>
    )
  } else if (temporaryOrg.length > 0) {
    orgListLoding = (
      <>
        {temporaryOrg.map(data => (
          <tr key={data.orgId}>
              <td>{data.orgName}</td>
              <td>{data.orgMobile}</td>
              <td>{data.orgCertified}</td>
              <td>{data.orgManName}</td>
              <td>{data.orgManMobile}</td>
          </tr>
        ))}
      </>
    )
  }

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
              {/* card
              <div className="cardBox2">
                <div className="serCard">
                  <div>
                    <div className="cardName">봉사자</div>
                  </div>
                </div>
                <div className="orgCard" id="card2">
                  <div>
                    <div className="cardName">기관</div>
                  </div>
                </div>
              </div> */}

              {/* 봉사자 목록 */}
              <div className="userList">

                <div className="volun_name">봉사자 목록</div>
                <table  className='serTable'>
                  <tr>
                    <th className='serNameColumn'>이름</th>
                    <th className='serMobileColumn'>전화번호</th>
                    <th className='serEmailColumn'>이메일</th>
                  </tr>
                  {serListLoding}
                </table>
              </div>
              <div className="userList" id="orgList2">

                <div className="volun_name">기관 목록</div>
                <table  className='orgTable'>
                  <tr>
                    <th className='orgNameColumn'>기관명</th>
                    <th className='orgMobileColumn'>기관 전화번호</th>
                    <th className='orgEmailColumn'>인증여부</th>
                    <th className='orgNameColumn'>담당자명</th>
                    <th className='orgMobileColumn'>담당자 전화번호</th>
                  </tr>
                  {orgListLoding}
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserManagement;