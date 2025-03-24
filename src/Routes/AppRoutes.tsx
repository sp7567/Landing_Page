import React from 'react';
import { Route, Routes } from "react-router-dom";

// import Elements
import LandingPage from '../Pages/LandingPage';
import Login from '../components/common/Login';
import Register from '../components/common/Register';
import Profile from '../Pages/Profile';
import Pagetemplate from '../Pages/Pagetemplate';

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Pagetemplate />}>
                <Route index element={<LandingPage />}/>
                <Route path='/user/login' element={<Login />} />
                <Route path="/user/register" element={<Register />} />
                <Route path="/user/profile" element={<Profile />} />
            </Route>
        </Routes>
    </>
  )
}

export default AppRoutes;