import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Institutional from '../pages/institutional/Institutional'
import Profile from '../components/student-profile/Profile'
import CardLesson from '../components/card-lesson/CardLesson'
import FormContact from '../components/form-contact/FormContact'
import Course from '../pages/student/course/Course'
import Filters from '../components/student-landing-page/Filters'
import LandingPage from '../pages/student/landing-page/LandingPage'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/institutional' element={<Institutional/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/cardlesson' element={<CardLesson/>}/>
            <Route path='/formcontact' element={<FormContact/>}/>
            <Route path='/lp' element={<LandingPage/>}/>
            <Route path='/course' element={<Course/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes