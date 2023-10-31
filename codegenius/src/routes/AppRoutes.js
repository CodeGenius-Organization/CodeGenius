import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import LogOut from '../pages/LogOut'


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/logout' element={<LogOut/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes