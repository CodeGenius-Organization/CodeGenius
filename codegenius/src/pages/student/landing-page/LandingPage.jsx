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
    const [selectedCardId, setSelectedCardId] = useState(null);
    
    // const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWN0b3JAZ21haWwuY29tIiwiaXNzIjoiQVBJIENvZGUgR2VuaXVzIiwiZXhwIjoxNzAxNDg5NjQyfQ.Nt2pwv_rIHZYicozRnt7o6qGEZa_gYk0juSw4qJ3wPk"
    // sessionStorage.setItem("authToken", token)

    const handleTabClick = (category) => {
        setSelectedCategory(category)
    }

    const handleCardClick = (courseId) => {
        // tentativa falha de fazer o navegador armazenar a última página acessada antes de redirecionar
        // pra poder usar o botão de voltar página do navegador...
        // window.history.pushState(null, null, "/");
        // window.dispatchEvent(new Event('popstate'));

        setSelectedCardId(courseId)
    }

    const getCourses = async () => {
        try {
            if (coursesCache[selectedCategory]) {
                setCourses(coursesCache[selectedCategory])
            } else {
                const response = await
                api.get(`course/courses/category/Desenvolvimento`, 
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${sessionStorage.getItem("authToken")}`
                    }
                });
                if (response.status === 200) {
                    console.log(response.data)
                    setCourses(response.data);
                    setCoursesCache({...coursesCache, [selectedCategory]: response.data})
                }
            }
        } catch (error) {
            console.log(error)
            throw new Error("Ocorreu um erro interno")
        }
    }
    
    useEffect(() => {
        // setSelectedCardId(null);
        getCourses();
    }, [selectedCategory, coursesCache, selectedCardId]);

    return (
        
        <>
            <div className={ style.main_section }>
                {selectedCardId !== null ? (
                    <Course courseId={ selectedCardId } handleUnselectCourse={ setSelectedCardId }/>
                ) : (
                    <React.Fragment>
                        <DevTopBar onChangeTab={handleTabClick} currentCategory={ selectedCategory } />
                        <Filters />
                        <div className={ style.course_list }>
                            {courses.map((course) => (
                                <CardLesson onCardClick={ handleCardClick }  key={ course.id } course={ course }/>
                                ))}
                        </div>
                    </React.Fragment>
                )}
            </div>
        </>
    )
}

export default LandingPage