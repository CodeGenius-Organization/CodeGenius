import React from "react";

import { MdSearch } from "react-icons/md";

import style from './Filters.module.css'

function Filters() {
    const iconStyle = {color: "#4476E0", width: "20px", height: "20px"}
    
    return (
        <>
            <div className={ style.container }>
                <div className={ style.search_section }>
                    <div className={ style.input_icon}>
                        <div className={ style.icon }>
                            <MdSearch style={iconStyle}/>
                        </div>
                        <input type="text" placeholder="Pesquise aqui"/>
                    </div>
                    <button>Buscar</button>
                    <select name="" id="">
                        <option value="0">Linguagem</option>
                    </select>
                </div>
                <div className={ style.filter_section }>
                    <span>Filtrar por:</span>
                    <select name="" id="">
                        <option value="1">Popularidade</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Filters