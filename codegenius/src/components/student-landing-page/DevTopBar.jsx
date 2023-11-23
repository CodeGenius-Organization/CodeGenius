import React from "react";

import { MdCode } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

import style from './DevTopBar.module.css'

function DevTopBar({ changeTab, currentTab} ) {
    const iconStyle = {color: "#FFF", width: "24px", height: "24px"}
    
    return (
        <>
            <div className={ style.container }>
                <div className={ `${style.item} ${currentTab === 'Desenvolvedor' ? style.active : ''}` } onClick={() => changeTab("Desenvolvedor")}>
                    <MdCode style={ iconStyle } />
                    <span>Desenvolvedor</span>
                </div>
                <div className={ `${style.item} ${currentTab === 'Web' ? style.active : ''}` } onClick={() => changeTab("Web")}>
                    <FaLaptopCode style={ iconStyle } />
                    <span>Web</span>
                </div>
                <div className={ `${style.item} ${currentTab === 'Mobile' ? style.active : ''}` } onClick={() => changeTab("Mobile")}>
                    <MdDeveloperMode style={ iconStyle } />
                    <span>Mobile</span>
                </div>
                <div className={ `${style.item} ${currentTab === 'Front-end' ? style.active : ''}` } onClick={() => changeTab("Front-end")}>
                    <MdWeb style={ iconStyle } />
                    <span>Front-end</span>
                </div>
                <div className={ `${style.item} ${currentTab === 'Back-end' ? style.active : ''}` } onClick={() => changeTab("Back-end")}>
                    <FaCode style={ iconStyle } />
                    <span>Back-end</span>
                </div>
            </div>
        </>
    )
}

export default DevTopBar