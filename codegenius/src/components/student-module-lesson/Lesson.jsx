import React from "react";
import {MdDone} from "react-icons/md";
import style from './Lesson.module.css'

function Lesson({ lesson, moduleOrder, onLessonClick }) {
    const { lessonOrder, contentDescription, lessonTitle } = lesson;
    // pra fazer aparecer e desaparecer o check de concluído, mexer aqui futuramente, adicionando alguma propriedade tipo hidden sla
    const doneStyle = {color: "green", width: "30px", height: "27px", alignSelf: "center"}


    // handle events
    const handleLessonSelection = (lesson) => {
        onLessonClick(lesson);
    }


    // component render
    return (
        <>
            <div className={style.lesson_card} onClick={() => handleLessonSelection(lesson) }>
                <div className={style.lesson_order}>
                    <span>{moduleOrder} - {lessonOrder}</span>
                </div>
                <div className={style.lesson_details}>
                    <div className={style.details_header}>
                        <span className={style.lesson_title}>{ lessonTitle }</span> 
                        <MdDone style={doneStyle}/>
                    </div>
                    <div className={style.details_body}>
                        <span className={style.content}>
                            {contentDescription}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lesson