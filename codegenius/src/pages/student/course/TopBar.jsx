import React from "react";

import { MdOutlineLocalLibrary } from "react-icons/md";
import { PiBarbell } from "react-icons/pi";
import { CgNotes } from "react-icons/cg";

import style from './TopBar.module.css'

function TopBar() {
    const icon1Style = {color: "#FFF", width: "24px", height: "24px"}
    const icon2Style = {color: "#FFF", width: "24px", height: "24px"}
    const icon3Style = {color: "#FFF", width: "24px", height: "24px"}
    
    return (
        <>
            <div className={ style.container }>
                <div className={ style.item }>
                    <MdOutlineLocalLibrary style={ icon1Style } />
                    <span>Introdução</span>
                </div>
                <div className={ style.item }>
                    <PiBarbell style={ icon2Style } />
                    <span>Exercícios</span>
                </div>
                <div className={ style.item }>
                    <CgNotes style={ icon3Style } />
                    <span>Prova</span>
                </div>

            </div>
        </>
    )
}

export default TopBar