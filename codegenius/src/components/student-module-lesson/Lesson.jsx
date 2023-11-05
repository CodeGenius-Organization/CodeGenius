import React from "react";
import {MdDone} from "react-icons/md";
import api from "../../Api";
import './Lesson.css'

function Lesson({ lesson, moduleOrder }) {
    const { lessonOrder, contentDescription } = lesson;
    // pra fazer aparecer e desaparecer o check de concluído, mexer aqui futuramente, adicionando alguma propriedade tipo hidden sla
    const doneStyle = {color: "green", width: "30px", height: "27px", alignSelf: "center"}

    // em lesson-title, TODO: adicionar atributo no BD e API do título da lição
    
    return (
        <>
            <div className="lesson-card">
                <div className="lesson-order">
                    <span>{moduleOrder} - {lessonOrder}</span>
                </div>
                <div className="lesson-details">
                    <div className="details-header">
                        <span className="lesson-title">Parte 1</span> 
                        <MdDone style={doneStyle}/>
                    </div>
                    <div className="details-body">
                        <span className="content">
                            {contentDescription}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lesson