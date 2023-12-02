import React from "react";
import style from './Module.module.css'
import Lesson from "./Lesson";

function Module({ module, onLessonClick }) {
    const { moduleName, lessons, moduleOrder } = module;
    
    return (
        <div className={ style.module }>
            <span>{ moduleName }</span>
            <div className={ style.lessons }>
                { lessons.map((lesson) => (
                    <Lesson 
                    lesson={ lesson }
                    key={ lesson.id }
                    moduleOrder={ moduleOrder }
                    onLessonClick={ onLessonClick }/> 
                ))}
            </div>
        </div>
    )
}

export default Module