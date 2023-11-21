import React from "react";

import { MdOutlineList, MdOutlineFavorite, MdCheckCircle } from "react-icons/md";
import { FaRegClock } from "react-icons/fa"
import style from './CoursesTopBar.module.css'

function CoursesTopBar() {
    const iconStyle = {color: "#FFF", width: "24px", height: "24px"}
    
    return (
        <>
            <div className={ style.container }>
                <div className={ style.item }>
                    <MdOutlineList style={ iconStyle } />
                    <span>Todos</span>
                </div>
                <div className={ style.item }>
                    <MdOutlineFavorite  style={ iconStyle } />
                    <span>Favoritos</span>
                </div>
                <div className={ style.item }>
                    <FaRegClock style={ iconStyle } />
                    <span>Em andamento</span>
                </div>
                <div className={ style.item }>
                    <MdCheckCircle style={ iconStyle } />
                    <span>Concluído</span>
                </div>
            </div>
        </>
    )
}

export default CoursesTopBar