import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Institutional from '../pages/institutional/Institutional'
import FormContact from '../pages/form-contact/FormContact'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/institutional' element={<Institutional/>}/>
                <Route path='/form-contact' element={<FormContact/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes