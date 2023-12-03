import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Institutional from '../pages/institutional/Institutional'
import FormContact from '../pages/form-contact/FormContact'
import HomeTeacher from '../pages/home/HomeTeacher'
import LandingPage from '../pages/student/landing-page/LandingPage'


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/institutional' element={<Institutional/>}/>
                <Route path='/form-contact' element={<FormContact/>}/>
                <Route path='/prof' element={<HomeTeacher/>}/>
                <Route path='/aluno' element={<LandingPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes