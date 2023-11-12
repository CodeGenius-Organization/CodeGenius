import React from "react";
import api from "../../Api";
import style from './Module.module.css'
import Lesson from "./Lesson";

function Module({ module }) {
    const { moduleName, lessons, moduleOrder } = module;
    
    return (
        <div className={style.module}>
            <span>{moduleName}</span>
            <div className={style.lessons}>
                {lessons.map((lesson) => (
                    <Lesson 
                    lesson={lesson}
                    moduleOrder={moduleOrder}/> 
                ))}
            </div>
        </div>
    )
}

export default Module