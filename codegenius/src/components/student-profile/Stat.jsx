import React from "react";
import './Stat.css'

function Stat({ icon, number, text }) {
    return (
        <>
            <div className="stats-wrapper">
                <div className="icon-wrapper">
                    {icon}
                </div>
                <div className="stats-info">
                    <span className="stats-number">
                        {number}
                    </span>
                    <span className="stats-text">
                        {text}
                    </span>
                </div>
            </div>

        </>
    )
}

export default Stat