import React from "react";
import style from "./CourseContent.module.css"
    
import TopBar from "./TopBar";

import { CiHeart } from "react-icons/ci";

function CourseContent({ media, lessonTitle, lessonContent }) {
    const heartStyle = { color: "#FFF", width: "24px", height: "24px" }
    
    return (
        <>
            <div className={style.learn_section}>
                <span>O que aprenderá:</span>
                <img src={media} alt="" />
                <div className={style.lesson_content}>
                    <div className={style.lesson_header}>
                        <span>{ lessonTitle }</span>
                        <div className={style.like_button}>
                            <CiHeart style={heartStyle} />
                            <span>Curtir</span>
                        </div>
                    </div>
                    <div className={style.lesson_body}>
                        <span>{ lessonContent }</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseContent