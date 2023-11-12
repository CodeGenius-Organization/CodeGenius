import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import LogOut from '../pages/LogOut'
import Profile from '../components/student-profile/Profile'
import CardLesson from '../components/CardLesson'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/logout' element={<LogOut/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/cardlesson' element={<CardLesson/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes