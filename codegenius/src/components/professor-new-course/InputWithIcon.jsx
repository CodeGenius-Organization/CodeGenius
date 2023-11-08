import React from "react";
import './InputWithIcon.css'

function InputWithIcon({ icon, inputDivStyle, placeholder }) {
    return (
        <>
            <div className="div-input-icon" style={inputDivStyle}>
                <div className="icon">
                    {icon}
                </div>
                <div className="input" style={inputDivStyle}>
                    <input type="text" placeholder={placeholder}/>
                </div>
            </div>
        </>
    )
}

export default InputWithIcon