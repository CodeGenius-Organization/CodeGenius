import React from "react";
import './TextAreaWithIcon.css'

function TextAreaWithIcon({ icon, textAreaDivStyle, placeholder }) {
    return (
        <>
            <div className="div-input-icon" style={ textAreaDivStyle }>
                <div className="icon">
                    {icon}
                </div>
                <div className="input" style={ textAreaDivStyle }>
                    <textarea name="" id="" cols="30" rows="10" placeholder={ placeholder }></textarea>
                </div>
            </div>
        </>
    )
}

export default TextAreaWithIcon