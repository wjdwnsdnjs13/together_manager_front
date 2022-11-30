import * as React from "react";
import './AdminPage.css';
import { Link, Outlet } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

function AdminPage(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const menuId = 'primary-search-account-menu';

  const [expended, setExpended] = React.useState(false);

  return (
    <>
      <Outlet />
      <div className="AdminPage_body">
        <div className="AdminPage_main">
          {/* 네비게이션 */}
          <div className="AdminPage_navigation">
            <ul>
              <Link to="/Adminpage" className="main_title">
                <p className="main_title">TOGETHER</p>
              </Link>
              <li id="current">
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
                <Typography >관리자님</Typography>
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
            {/* 
            {// card }
            <div className="cardBox">
              <div className="card">
                <div>
                  <div className="numbers">1,504</div>
                  <div className="cardName">모집중</div>
                </div>
                <div className="iconBox"> {// icon}
                  <div className=""></div>
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="numbers">80</div>
                  <div className="cardName">모집완료</div>
                </div>
                <div className="iconBox"> {// icon }
                  <div className=""></div>
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="numbers">150</div>
                  <div className="cardName">봉사관리</div>
                </div>
                <div className="iconBox"> {// icon }
                  <div className=""></div>
                </div>
              </div>
            </div>

            {//detail list}
            <div className="detail_list">
              <div className="admin_volunteer">
                <div className="cardHeader">
                  <h2>봉사 관리</h2>
                  <Link to="/AdminPage/AdminDrawer" className="btn">more +</Link>
                </div>
                <table>
                  <tr>
                    <td width="60px"><div className="imgBox"><img src="Spring.png"></img></div></td>
                    <td><h4>목록 1</h4></td>
                  </tr>
                  <tr>
                    <td width="60px"><div className="imgBox"><img src="Spring.png"></img></div></td>
                    <td><h4>목록 1</h4></td>
                  </tr>
                  <tr>
                    <td width="60px"><div className="imgBox"><img src="Spring.png"></img></div></td>
                    <td><h4>목록 1</h4></td>
                  </tr>
                  <tr>
                    <td width="60px"><div className="imgBox"><img src="Spring.png"></img></div></td>
                    <td><h4>목록 1</h4></td>
                  </tr>
                  <tr>
                    <td width="60px"><div className="imgBox"><img src="Spring.png"></img></div></td>
                    <td><h4>목록 1</h4></td>
                  </tr>

                </table>
              </div>

              {//new customer}
              <div className="volunteer_list">
                <div className="cardHeader">
                  <h2>봉사자 목록</h2>
                  <Link to="/AdminPage/AdminDrawer" className="btn">more +</Link>
                </div>
                <table>
                  <tr>
                    <td width="60px"><div className="imgBox"><img src="Spring.png"></img></div></td>
                    <td><h4>홍길동</h4></td>
                  </tr>
                  <tr>
                    <td width="60px"><div className="imgBox"><img src="Spring.png"></img></div></td>
                    <td><h4>홍길동</h4></td>
                  </tr>
                  <tr>
                    <td width="60px"><div className="imgBox"><img src="Spring.png"></img></div></td>
                    <td><h4>홍길동</h4></td>
                  </tr>
                  <tr>
                    <td width="60px"><div className="imgBox"><img src="Spring.png"></img></div></td>
                    <td><h4>홍길동</h4></td>
                  </tr>
                  <tr>
                    <td width="60px"><div className="imgBox"><img src="Spring.png"></img></div></td>
                    <td><h4>홍길동</h4></td>
                  </tr>
                </table>
              </div>
            </div> */}


          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPage;