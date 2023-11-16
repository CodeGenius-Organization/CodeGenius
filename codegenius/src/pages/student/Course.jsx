import React from "react";

import style from "./Course.module.css"
import img from "./imgs/img.png"

import ModuleList from "../../components/student-module-lesson/ModuleList"

import { MdKeyboardArrowRight } from 'react-icons/md'
import { CiHeart } from "react-icons/ci";

function Course() {
    const arrowStyle = { color: "#FFF", width: "24px", height: "24px" }
    const heartStyle = { color: "#FFF", width: "24px", height: "24px" }

    return (
        <>
            <div className={style.container}>
                <div className={style.left_section}>

                </div>
                <div className={style.main_section}>
                    <div className={style.breadcrumb}>
                        <span className={style.breadcrumb_element}>
                            Criar/Editar cursos
                        </span>
                        <MdKeyboardArrowRight style={arrowStyle} />
                        <span className={`${style.breadcrumb_element} ${style.now}`}>
                            Linguagem de programação
                        </span>
                    </div>
                    <div className={style.content}>
                        <ModuleList />
                        <div className={style.learn_section}>
                            <span>O que aprenderá:</span>
                            <img src={img} alt="" />
                            <div className={style.lesson_content}>
                                <div className={style.lesson_header}>
                                    <span>Lógica de programação: JavaScript</span>
                                    <div className={style.like_button}>
                                        <CiHeart style={heartStyle} />
                                        <span>Curtir</span>
                                    </div>
                                </div>
                                <div className={style.lesson_body}>
                                    <span>Uma linguagem de programação é como um idioma especial que nós, humanos, usamos para conversar com computadores. Imagine que é como dar comandos mágicos para fazer o computador fazer coisas incríveis. É como ser um feiticeiro digital! Essas linguagens são como conjuntos de regras e símbolos que você usa para criar feitiços, ou seja, programas de computador. Esses programas são como histórias que você conta ao computador e ele entende e executa o que você disse.
                                        Aprender uma linguagem de programação é como aprender a arte da magia digital. Você vai descobrir como pensar de forma lógica, resolver quebra-cabeças e criar truques impressionantes com o computador. Você também vai aprender a criar seus próprios feitiços (programas) para fazer jogos, aplicativos, sites e muito mais. É como ter um superpoder para criar coisas incríveis no mundo digital!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course