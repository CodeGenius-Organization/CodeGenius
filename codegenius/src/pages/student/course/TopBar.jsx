import React from "react";

import { MdOutlineLocalLibrary } from "react-icons/md";
import { PiBarbell } from "react-icons/pi";
import { CgNotes } from "react-icons/cg";

import style from './TopBar.module.css'

function TopBar({ changeTab, currentTab }) {
    const icon1Style = {color: "#FFF", width: "24px", height: "24px"}
    const icon2Style = {color: "#FFF", width: "24px", height: "24px"}
    const icon3Style = {color: "#FFF", width: "24px", height: "24px"}

    // console.log(currentTab)
    
    return (
        <>
            <div className={ style.container }>
                <div className={ `${style.item} ${currentTab === "Introdução" ? style.active : ""}` } onClick={() => changeTab("Introdução")}>
                    <MdOutlineLocalLibrary style={ icon1Style } />
                    <span>Introdução</span>
                </div>
                <div className={ `${style.item} ${currentTab === "Exercícios" ? style.active : ""}` } onClick={() => changeTab("Exercícios")}>
                    <PiBarbell style={ icon2Style } />
                    <span>Exercícios</span>
                </div>
                <div className={ `${style.item} ${currentTab === "Prova" ? style.active : ""}` } onClick={() => changeTab("Prova")}>
                    <CgNotes style={ icon3Style } />
                    <span>Prova</span>
                </div>

            </div>
        </>
    )
}

export default TopBar