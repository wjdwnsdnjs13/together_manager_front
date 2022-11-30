import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import AdminPage from './pages/Adminpage/AdminPage';
import LoginLoadingPage from './pages/loading/LoginLoadingPage';
import UserManagement from './pages/Adminpage/UserManagement';
import ManNotice from './pages/Adminpage/ManNotice';
import NoticeUpdate from './pages/Adminpage/NoticeUpdate';
import OrgCertified from './pages/Adminpage/OrgCertified';
import CreateNotice from './pages/Adminpage/CreateNotice';
import NoticeCreate from './pages/Adminpage/NoticeCreate';

function App(props) {
  return (
    <div className="app-body">
      <Routes>
        <Route exact={true} path='/' element={<Login />} />
        <Route exect={true} path='/Register' element={<Register />} />
        <Route path='/LoginLoadingPage' element={<LoginLoadingPage />} />
        <Route path='/AdminPage' element={<AdminPage />} />
        <Route path='/AdminPage/UserManagement' element={<UserManagement />} />
        <Route path='/AdminPage/ManNotice' element={<ManNotice />} />
        <Route path='/AdminPage/NoticeUpdate' element={<NoticeUpdate />} />
        {/* <Route path='/AdminPage/CreateNotice' element={<CreateNotice />} /> 내가 만들었던 거 */}
        <Route path='/AdminPage/NoticeCreate' element={<NoticeCreate />} />
        <Route path='/AdminPage/OrgCertified' element={<OrgCertified />} />
      </Routes>
    </div>
  );
}

export default App;
