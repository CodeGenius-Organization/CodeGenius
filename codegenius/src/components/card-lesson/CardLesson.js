import React from 'react'
import style from './CardLesson.module.css';
import {useState} from 'react'
import img from '../../img/Mask group.svg';
import img2 from '../../img/Frame 70.svg';
import img3 from '../../img/Ellipse 49.svg';
import img4 from '../../img/favorite.svg';
import img5 from '../../img/favorite (1).svg';

import { FaCircle } from "react-icons/fa6";

function CardLesson({ course, onCardClick }) {
    const circleStyle = {width: "5px", height: "5px"}

    const handleCardClick = (courseId) => {
        onCardClick(courseId)
    }
    
    const [showElement, setShowElement] = useState(false)
    const showOrHide = (event) => {
        event.stopPropagation();
        setShowElement(true)
    }
    return (
        <>
            <div className ={style.card} onClick={() => handleCardClick(course.id) }>
                <div className ={style.img}>
                    {/* <img src = {img} alt='image'/> */}
                    {/* <div className = {style.fav}>
                        <img id= {style.img3} src={img3}/>
                    </div> */}
                    <div className={style.fav}>
                        <img id={style.img4} src={img4}  onClick={showOrHide}/>
                        {showElement ? <img id={style.img5} src={img5} onClick={showOrHide} /> : true }
                    </div>
                </div>   

                <div className={style.container}>
                    <div className={style.card_lesson}>
                        <div className={style.info_card}>
                            <span className={style.card_title}>{ course.title }</span>
                            <div className={style.languages}>
                                { course.languages.map((language) => (
                                    <React.Fragment key={ language.id }>
                                        <span>{ language.language }</span>
                                        {/* <FaCircle style={ circleStyle } /> */}
                                    </React.Fragment>
                                ))}
                            </div>
                            <span>Feito por: Helen Pêra</span>
                            <span>Em andamento</span>
                            <div className={style.rate}>
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