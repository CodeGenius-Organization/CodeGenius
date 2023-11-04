import React from "react";
import {MdDone} from "react-icons/md";
import api from "../../Api";
import './Lesson.css'

function Lesson() {
    // pra fazer aparecer e desaparecer o check de concluído, mexer aqui futuramente, adicionando alguma propriedade tipo hidden sla
    const doneStyle = {color: "green", width: "30px", height: "27px", alignSelf: "center"}
    
    return (
        <>
            <div className="lesson-card">
                <div className="lesson-order">
                    <span>1 - 1</span>
                </div>
                <div className="lesson-details">
                    <div className="details-header">
                        <span className="lesson-title">Parte 1</span>
                        <MdDone style={doneStyle}/>
                    </div>
                    <div className="details-body">
                        <span className="content">
                            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lesson