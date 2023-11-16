import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import LogOut from '../pages/LogOut'
import Profile from '../components/student-profile/Profile'
import CardLesson from '../components/CardLesson'
import FormContact from '../components/FormContact'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/logout' element={<LogOut/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/cardlesson' element={<CardLesson/>}/>
            <Route path='/formcontact' element={<FormContact/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes