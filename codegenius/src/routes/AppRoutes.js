import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Institucional from '../pages/institutional/Institutional'
import Profile from '../components/student-profile/Profile'
import CardLesson from '../components/card-lesson/CardLesson'
import FormContact from '../components/form-contact/FormContact'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Institucional/>}/>
            <Route path='/logout' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/cardlesson' element={<CardLesson/>}/>
            <Route path='/formcontact' element={<FormContact/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes