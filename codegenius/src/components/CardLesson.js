import React from 'react'
import style from './CardLesson.module.css';
import {useState} from 'react'
import img from '../img/Mask group.svg';
import img2 from '../img/Frame 70.svg';
import img3 from '../img/Ellipse 49.svg';
import img4 from '../img/favorite.svg';
import img5 from '../img/favorite (1).svg';

import { FaCircle } from "react-icons/fa6";

function CardLesson() {
    const circleStyle = {width: "5px", height: "5px"}

    const [showElement, setShowElement] = useState(false)
    const showOrHide = () => setShowElement(true)

    return (
        <>
            <div class ={style.card}>
                <div class ={style.img}>
                    {/* <img src = {img} alt='image'/> */}
                    {/* <div class = {style.fav}>
                        <img id= {style.img3} src={img3}/>
                    </div> */}
                    <div className={style.fav}>
                        <img id={style.img4} src={img4}  onClick={showOrHide}/>
                        {showElement ? <img id={style.img5} src={img5} onClick={showOrHide} /> : true }
                    </div>
                </div>   

                <div class={style.container}>
                    <div class={style.card_lesson}>
                        <div class={style.info_card}>
                            <span class={style.card_title}>Lógica de Programação</span>
                            <div className={style.languages}>
                                <span>JavaScript</span>
                                <FaCircle style={ circleStyle }/>
                                <span>HTML</span>
                                <FaCircle style={ circleStyle }/>
                                <span>CSS</span>
                            </div>
                            <span>Feito por: Helen Pêra</span>
                            <span>Em andamento</span>
                            <div class={style.rate}>
                                <img src={img2}></img>
                                <span>4.0 (1987)</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardLesson