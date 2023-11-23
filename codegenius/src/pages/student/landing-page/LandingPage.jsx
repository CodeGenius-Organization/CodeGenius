import React, { useState, useEffect } from "react";
import api from '../../../Api'

import style from './LandingPage.module.css'

import DevTopBar from '../../../components/student-landing-page/DevTopBar'
import Filters from '../../../components/student-landing-page/Filters'

function LandingPage() {
    // const [selectedCategory, setSelectedCategory] = useState('Desenvolvedor');
    // const [coursesCache, setCoursesCache] = useState({});
    // const [courses, setCourse] = useState([])

    useEffect(() => {
        api.get(`course/courses/category/Desenvolvimento`, 
        {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            if (response.status === 200) {
                console.log("okay")
            } else {
                throw new Error("Ocorreu um erro interno")
            }
        })
        .catch((error) => {
            console.log(error)
        })
    })

    return (
        
        <>
            <div className={ style.main_section }>
                <DevTopBar />
                <Filters />
                <div className={ style.course_list }>

                </div>
            </div>
        </>
    )
}

export default LandingPage