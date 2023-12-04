import React, { useState, useEffect } from "react";
import CourseContent from "./CourseContent";
import api from '../../../Api'

import style from "./Course.module.css"
import img from "../../../img/video.png"

import ModuleList from "../../../components/student-module-lesson/ModuleList"

import { MdKeyboardArrowRight } from 'react-icons/md'
import TopBar from "./TopBar";
import SingleAnswerQuestion from "../../../components/questions/SingleAnswerQuestion"
import Exercises from "./Exercises";
import FriendCard from "../../student-social/FriendCard"

function Course({ courseId, handleUnselectCourse }) {
    const arrowStyle = { color: "#FFF", width: "24px", height: "24px" }
    // useState
    const [course, setCourse] = useState({});
    const [currentTab, setCurrentTab] = useState('Introdução');
    const [firstLesson, setFirstLesson] = useState({});
    const [currentContent, setCurrentContent] = useState();
    const [currentLesson, setCurrentLesson] = useState({});


    // useState

    const getCourseDetails = async () => {
        try {
            const response = await
                api.get(`course/courses/${courseId}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${sessionStorage.getItem("authToken")}`
                        }
                    });
            if (response.status === 200) {
                console.log(response.data)
                setCourse(response.data);
            }

        } catch (error) {
            console.log(error);
            throw new Error("Ocorreu um erro interno");
        }
    }

    useEffect(() => {
        getCourseDetails();
    }, [courseId, firstLesson, currentLesson])


    useEffect(() => {
        if (Object.keys(course).length === 0) {
            setCurrentContent('<p>Carregando...</p>');
        } else {
            setCurrentContent(
                <CourseContent
                    media={img}
                    lessonTitle={course.title}
                    lessonContent={course.contentDescription}
                />
            );
        }
    }, [course])

    useEffect(() => {
        handleShowContent('Introdução');
    }, [firstLesson, currentLesson])

    const changeTab = (tabName) => {
        setCurrentTab(tabName);
    }

    // handle events
    const handleBreadcrumbClick = () => {
        handleUnselectCourse(null);
    }

    const handleLessonSelection = (lesson) => {
        setCurrentLesson(lesson);
        setFirstLesson(lesson.lessonContent);
    }

    function handleShowContent(selectedTab) {
        switch (selectedTab) {
            case 'Introdução':
                setCurrentContent(<CourseContent
                    media={img}
                    lessonTitle={firstLesson && firstLesson.title}
                    lessonContent={firstLesson && firstLesson.content}
                />);
                setCurrentTab('Introdução');
                break;
            case 'Exercícios':
                setCurrentContent(<Exercises />)
                setCurrentTab('Exercícios');
                break;
            case 'Prova':
                setCurrentContent(<FriendCard />)
                setCurrentTab('Prova');
                break;
            default:
                setCurrentContent(<CourseContent
                    media={img}
                    lessonTitle={course.title}
                    lessonContent={course.contentDescription}
                />)
                break;
        }
    }

    // let selectedTab;
    // if (currentTab === "Introdução") {
    //     selectedTab = <CourseContent
    //         media={img}
    //         lessonTitle={firstLesson.title}
    //         lessonContent={firstLesson.content}
    //     />
    // } else if (currentTab === "Exercícios") {
    //     selectedTab = <Exercises />
    // } else if (currentTab === "Prova") {
    //     selectedTab = <FriendCard />
    // }

    return (
        <>
            {/* <div className={style.container}>
                <div className={style.left_section}>

                </div> */}
            <div className={style.main_section}>
                {/* TODO: componentizar o breadcrumb */}
                <div className={style.breadcrumb}>
                    <span className={style.breadcrumb_element} onClick={handleBreadcrumbClick}>
                        Cursos
                    </span>
                    <MdKeyboardArrowRight style={arrowStyle} />
                    <span className={`${style.breadcrumb_element} ${style.now}`}>
                        {course.title}
                    </span>
                </div>
                <div className={style.content}>
                    <ModuleList courseId={course.id} onLessonClick={handleLessonSelection} />
                    <div className={style.learn_section}>
                        {currentLesson.id &&
                            <TopBar changeTab={handleShowContent} currentTab={currentTab} />
                        }
                        {course &&
                            currentContent
                        }
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default Course