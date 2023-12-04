import React from "react";
import style from './TextAreaWithIcon.module.css'

function TextAreaWithIcon({ icon, textAreaDivStyle, placeholder, onInputChange, value }) {

    const handleInputChange = (e) => {
        let inputValue = e.target.value;

        onInputChange(inputValue);
    }
    
    return (
        <>
            <div className={style.div_input_icon} style={ textAreaDivStyle }>
                <div className={style.icon}>
                    {icon}
                </div>
                <div className={style.input} style={ textAreaDivStyle }>
                    <textarea value={ value } name="" id="" cols="30" rows="10" placeholder={ placeholder } onChange={ handleInputChange }></textarea>
                </div>
            </div>
        </>
    )
}

export default TextAreaWithIcon