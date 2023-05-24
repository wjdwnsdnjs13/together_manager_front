/* eslint-disable */
import React, { useCallback, useEffect, useState } from 'react';
import './OrgCertified.css';
import axios from "axios";
import { Link, Outlet, Route } from "react-router-dom";
import { Hidden, IconButton, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { display } from '@mui/system';

function OrgCertified() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [org, setOrg] = useState({});
  
  //최초 통신
  const findAllOrg = useCallback(() => {

    console.log("접속 시 공지사항 호출");

    try {
      let allOrg;
      // 전체 기관 가져오는 통신
      axios.get("/together/manager/find/all/users")
        .then((response) => {
          console.log(response.data);
          allOrg = response.data.organization;
          if (allOrg != null) { // 데이터 성공
            setOrg(allOrg);

          } else { // 데이터 실패

            // 오류 출력
            alert("[실패] 기관 정보를 받지 못했습니다.");

          }
        })
        .catch((error) => {
          console.log(error);
        });



    } catch (err) {
      console.log("Error >>", err);
    }
  }, []);

  //인증하는 기능
  function completeCertified(currentOrgId) { 
    console.log("기관 인증");

    try {
        axios.get('/together/manager/certificate/org', { params: { orgId: currentOrgId, orgCertified: 1 } })
            .then((response) => {
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (err) {
        console.log("Error >>", err);
    }


  
  }


  //인증취소하는 기능
  function cancelCertified(currentOrgId) {
    console.log("기관 인증 취소");

    try {
        axios.get('/together/manager/certificate/org', { params: { orgId: currentOrgId, orgCertified: 0 } })
            .then((response) => {
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (err) {
        console.log("Error >>", err);
    }

  

  }



  useEffect(() => {
    findAllOrg();
  }, []);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const menuId = 'primary-search-account-menu';

  // 인증하는 버튼
  const certifiedUpdate = useCallback(() => {

    console.log("인증 버튼 누름");

    try {

      //인증하기
      if(data.org_certified == 0){
        axios.get('/together/인증수정url', {params:{certifiedUpdate}})
          .then((response) => {
            console.log(response.data);
            notice_data = response.data;
            if (notice_data != null) { // 데이터 성공
              setNoticeData(notice_data);
  
            } else { // 데이터 실패
  
              // 오류 출력
              alert("[실패] 봉사 데이터를 받지 못하였습니다.");
  
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else{ // 인증취소하기
        axios.get('/together/인증수정url', {params:{certifiedUpdate}})
          .then((response) => {
            console.log(response.data);
            notice_data = response.data;
            if (notice_data != null) { // 데이터 성공
              setNoticeData(notice_data);
  
            } else { // 데이터 실패
  
              // 오류 출력
              alert("[실패] 봉사 데이터를 받지 못하였습니다.");
  
            }
          })
          .catch((error) => {
            console.log(error);
          });
        
      }



    } catch (err) {
      console.log("Error >>", err);
    }
  }, []);

  let orgListLoding = null;
  if (org.length === 0) {
    orgListLoding = (
      <div>기관이 없습니다!</div>
    )
  } else if (org.length > 0) {
    orgListLoding = (
      <>
        {org.map(data => (
          <div className='orgCertifiedList' key={data.orgId}>
              기관명 : {data.orgName}<br />
              기관번호 : {data.orgMobile}<br />
              담당자명 : {data.orgManName}<br />
              담당자번호 : {data.orgManMobile}<br />
              인증여부 : {data.orgCertified}
              {data.orgCertified ? 
              <button className="check_certified" onClick={() => cancelCertified(data.orgId)}>인증취소</button> : 
              <button className="check_certified" onClick={() => completeCertified(data.orgId)}>인증하기</button>}<br />
          </div>
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
            </div>
            <ul>
              {orgListLoding}
            </ul>

          </div>
        </div>
      </div>
    </>
  );
}

export default OrgCertified;