import React from "react";
import style from './InputWithIcon.module.css'

function InputWithIcon({ icon, inputDivStyle, placeholder }) {
    return (
        <>
            <div className={style.div_input_icon} style={inputDivStyle}>
                <div className={style.icon}>
                    {icon}
                </div>
                <div className={style.input} style={inputDivStyle}>
                    <input type="text" placeholder={placeholder}/>
                </div>
            </div>
        </>
    )
}

export default InputWithIcon