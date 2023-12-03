import React from "react";
import style from './InputWithIcon.module.css'

function InputWithIcon({ icon, inputDivStyle, placeholder, onInputChange }) {
    const handleInputChange = (e) => {
        let inputValue = e.target.value;

        onInputChange(inputValue);
    }
    
    
    return (
        <>
            <div className={style.div_input_icon} style={inputDivStyle}>
                <div className={style.icon}>
                    {icon}
                </div>
                <div className={style.input} style={inputDivStyle}>
                    <input type="text" placeholder={placeholder} onChange={ handleInputChange }/>
                </div>
            </div>
        </>
    )
}

export default InputWithIcon