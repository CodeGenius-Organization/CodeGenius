import React from "react";
import api from "../../Api";
import './Module.css'
import Lesson from "./Lesson";

function Module({ module }) {
    const { moduleName, lessons, moduleOrder } = module;
    
    return (
        <div className="module">
            <span>{moduleName}</span>
            <div className="lessons">
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