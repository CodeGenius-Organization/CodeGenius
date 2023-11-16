import React from "react";
import style from './Stat.module.css'

function Stat({ icon, number, text }) {
    return (
        <>
            <div className={style.stats_wrapper}>
                <div className={style.icon_wrapper}>
                    {icon}
                </div>
                <div className={style.stats_info}>
                    <span className={style.stats_number}>
                        {number}
                    </span>
                    <span className={style.stats_text}>
                        {text}
                    </span>
                </div>
            </div>

        </>
    )
}

export default Stat