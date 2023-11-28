import React from "react";

import style from './Courses.module.css'

import Filters from '../../../components/student-landing-page/Filters'
import CardLesson from '../../../components/card-lesson/CardLesson'
import CoursesTopBar from "./CoursesTopBar";

function Courses() {
    return (
        <>
            <div className={ style.main_section }>
                <CoursesTopBar/>
                <Filters />
                <div className={ style.course_list }>
                    {/* <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson /> */}
                </div>
            </div>
        </>
    )
}

export default Courses