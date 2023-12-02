import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Institutional from '../pages/institutional/Institutional'
import FormContact from '../pages/form-contact/FormContact'
import CourseCreation from '../pages/teacher/CourseCreation'
import ModuleCreation from '../pages/teacher/ModuleCreation'
import HomeTeacher from '../pages/home/HomeTeacher'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/institutional' element={<Institutional/>}/>
                <Route path='/form-contact' element={<FormContact/>}/>
                <Route path='/prof' element={<CourseCreation/>}/>
                <Route path='/prof2' element={<ModuleCreation/>}/>
                <Route path='/prof3' element={<HomeTeacher/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes