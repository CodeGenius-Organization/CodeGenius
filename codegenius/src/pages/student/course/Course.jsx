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

function Course({ courseId }) {
    const [course, setCourse] = useState({});

    const getCourseDetails = async () => {
        try {
            const response = await
            api.get(`courses/${courseId}`,
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
        // getCourseDetails();
    }, [courseId])
    
    const arrowStyle = { color: "#FFF", width: "24px", height: "24px" }
    const lessonTitle = "Lógica de programação: Javascript"
    const lessonContent = "Uma linguagem de programação é como um idioma especial que nós, humanos, usamos para conversar com computadores. Imagine que é como dar comandos mágicos para fazer o computador fazer coisas incríveis. É como ser um feiticeiro digital! Essas linguagens são como conjuntos de regras e símbolos que você usa para criar feitiços, ou seja, programas de computador. Esses programas são como histórias que você conta ao computador e ele entende e executa o que você disse. Aprender uma linguagem de programação é como aprender a arte da magia digital. Você vai descobrir como pensar de forma lógica, resolver quebra-cabeças e criar truques impressionantes com o computador. Você também vai aprender a criar seus próprios feitiços (programas) para fazer jogos, aplicativos, sites e muito mais. É como ter um superpoder para criar coisas incríveis no mundo digital!"
    
    const [currentTab, setCurrentTab] = useState('Introdução');

    const changeTab = (tabName) => {
        setCurrentTab(tabName);
    }

    let selectedTab;
    if (currentTab === "Introdução") {
        selectedTab = <CourseContent media={ img } lessonTitle={ lessonTitle } lessonContent={ lessonContent }/>
    } else if (currentTab === "Exercícios") {
        selectedTab = <Exercises />
    } else if (currentTab === "Prova") {
        selectedTab = <FriendCard />
    }
    
    return (
        <>
            {/* <div className={style.container}>
                <div className={style.left_section}>

                </div> */}
                <div className={style.main_section}>
                    {/* TODO: componentizar o breadcrumb */}
                    <div className={style.breadcrumb}>
                        <span className={style.breadcrumb_element}>
                            Cursos
                        </span>
                        <MdKeyboardArrowRight style={arrowStyle} />
                        <span className={`${style.breadcrumb_element} ${style.now}`}>
                            {course.title}
                        </span>
                    </div>
                    <div className={style.content}>
                        <ModuleList modules={ course.modules } />
                        <div className={ style.learn_section }>
                            <TopBar changeTab={changeTab} currentTab={currentTab}/>
                            {selectedTab}
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default Course