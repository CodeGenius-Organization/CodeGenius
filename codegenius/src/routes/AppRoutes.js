import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import LogOut from '../pages/LogOut'
import Profile from '../components/student-profile/Profile'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/logout' element={<LogOut/>}/>
            <Route path='/profile' element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes