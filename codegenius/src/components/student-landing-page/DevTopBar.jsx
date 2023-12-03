import React from "react";

import { MdCode } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

import style from './DevTopBar.module.css'

function DevTopBar({ onChangeTab, currentCategory} ) {
    const iconStyle = {color: "#FFF", width: "24px", height: "24px"}
    
    return (
        <>
            <div className={ style.container }>
                <div className={ `${style.item} ${currentCategory === 'Desenvolvedor' ? style.active : ''}` } onClick={() => onChangeTab("Desenvolvedor")}>
                    <MdCode style={ iconStyle } />
                    <span>Desenvolvedor</span>
                </div>
                <div className={ `${style.item} ${currentCategory === 'Web' ? style.active : ''}` } onClick={() => onChangeTab("Web")}>
                    <FaLaptopCode style={ iconStyle } />
                    <span>Web</span>
                </div>
                <div className={ `${style.item} ${currentCategory === 'Mobile' ? style.active : ''}` } onClick={() => onChangeTab("Mobile")}>
                    <MdDeveloperMode style={ iconStyle } />
                    <span>Mobile</span>
                </div>
                <div className={ `${style.item} ${currentCategory === 'Front-end' ? style.active : ''}` } onClick={() => onChangeTab("Front-end")}>
                    <MdWeb style={ iconStyle } />
                    <span>Front-end</span>
                </div>
                <div className={ `${style.item} ${currentCategory === 'Back-end' ? style.active : ''}` } onClick={() => onChangeTab("Back-end")}>
                    <FaCode style={ iconStyle } />
                    <span>Back-end</span>
                </div>
            </div>
        </>
    )
}

export default DevTopBar