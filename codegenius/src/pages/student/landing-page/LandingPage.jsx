import React from "react";

import style from './LandingPage.module.css'

import DevTopBar from '../../../components/student-landing-page/DevTopBar'
import Filters from '../../../components/student-landing-page/Filters'
import CardLesson from '../../../components/CardLesson'

function LandingPage() {
    return (
        <>
            <div className={ style.main_section }>
                <DevTopBar />
                <Filters />
                <div className={ style.course_list }>
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
                    <CardLesson />
                    <CardLesson />
                </div>
            </div>
        </>
    )
}

export default LandingPage