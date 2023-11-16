import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import LogOut from '../pages/LogOut'
import Profile from '../components/student-profile/Profile'
import CardLesson from '../components/CardLesson'
import FormContact from '../components/FormContact'
import Course from '../pages/student/Course'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/logout' element={<LogOut/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/cardlesson' element={<CardLesson/>}/>
            <Route path='/formcontact' element={<FormContact/>}/>
            <Route path='/course' element={<Course/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes