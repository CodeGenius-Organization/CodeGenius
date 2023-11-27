import React, { useState, useEffect } from "react";
import api from '../../../Api'
import Course from '../course/Course'

import style from './LandingPage.module.css'

import DevTopBar from '../../../components/student-landing-page/DevTopBar'
import Filters from '../../../components/student-landing-page/Filters'
import CardLesson from '../../../components/card-lesson/CardLesson'

function LandingPage() {
    const [selectedCategory, setSelectedCategory] = useState('Desenvolvedor');
    const [coursesCache, setCoursesCache] = useState({});
    const [courses, setCourses] = useState([])
    const [selectedCard, setSelectedCard] = useState(null);
    
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWN0b3JAZ21haWwuY29tIiwiaXNzIjoiQVBJIENvZGUgR2VuaXVzIiwiZXhwIjoxNzAwOTQzODYyfQ.f25Ccc6CwS5vnv5uCwhZH9_DbAJ4w9ux57bg-dI1E8Q"
    sessionStorage.setItem("authToken", token)

    const handleTabClick = (category) => {
        setSelectedCategory(category)
    }

    const handleCardClick = (cardId) => {
        setSelectedCard(cardId)
    }

    useEffect(() => {
        if (coursesCache[selectedCategory]) {
            setCourses(coursesCache[selectedCategory])
        } else {
            api.get(`courses/category/Desenvolvimento`, 
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem("authToken")}`
                }
            })
            .then((response) => {
                if (response.status === 200) {
                    setCourses(response.data)
                    setCoursesCache({...coursesCache, [selectedCategory]: response.data})
                } else {
                    throw new Error("Ocorreu um erro interno")
                }
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }, [selectedCategory, coursesCache]);

    return (
        
        <>
            <div className={ style.main_section }>
                {selectedCard != null ? 
                <Course courseData={ selectedCard }/>
                :
                <React.Fragment>
                    <DevTopBar onChangeTab={handleTabClick} currentCategory={selectedCategory} />
                    <Filters />
                    <div className={ style.course_list }>
                        {courses.map((course) => (
                            <CardLesson onCardClick={ handleCardClick }  key={ course.id } course={ course }/>
                            ))}
                    </div>
                </React.Fragment>
                }
            </div>
        </>
    )
}

export default LandingPage