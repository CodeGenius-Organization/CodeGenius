import React from "react";
import style from './TextAreaWithIcon.module.css'

function TextAreaWithIcon({ icon, textAreaDivStyle, placeholder }) {
    return (
        <>
            <div className={style.div_input_icon} style={ textAreaDivStyle }>
                <div className={style.icon}>
                    {icon}
                </div>
                <div className={style.input} style={ textAreaDivStyle }>
                    <textarea name="" id="" cols="30" rows="10" placeholder={ placeholder }></textarea>
                </div>
            </div>
        </>
    )
}

export default TextAreaWithIcon