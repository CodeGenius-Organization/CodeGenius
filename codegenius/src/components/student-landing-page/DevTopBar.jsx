import React from "react";

import { MdCode } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

import style from './DevTopBar.module.css'

function TopBar() {
    const iconStyle = {color: "#FFF", width: "24px", height: "24px"}
    
    return (
        <>
            <div className={ style.container }>
                <div className={ style.item }>
                    <MdCode style={ iconStyle } />
                    <span>Desenvolvedor</span>
                </div>
                <div className={ style.item }>
                    <FaLaptopCode style={ iconStyle } />
                    <span>Web</span>
                </div>
                <div className={ style.item }>
                    <MdDeveloperMode style={ iconStyle } />
                    <span>Mobile</span>
                </div>
                <div className={ style.item }>
                    <MdWeb style={ iconStyle } />
                    <span>Front-end</span>
                </div>
                <div className={ style.item }>
                    <FaCode style={ iconStyle } />
                    <span>Back-end</span>
                </div>
            </div>
        </>
    )
}

export default TopBar