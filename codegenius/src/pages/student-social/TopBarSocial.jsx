import React from "react";

import style from './TopBarSocial.module.css'

function TopBarSocial() {
    // console.log(currentTab)
    
    return (
        <>
            <div className={ style.container }>
                <div className={ `${style.item} ${style.active}`}>
                    <span>Seguindo</span>
                </div>
                <div className={ `${style.item}`}>
                    <span>Seus Seguidores</span>
                </div>

            </div>
        </>
    )
}

export default TopBarSocial