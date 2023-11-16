import React from 'react'
import style from './CardLesson.module.css';
import {useState} from 'react'
import img from '../img/Mask group.svg';
import img2 from '../img/Frame 70.svg';
import img3 from '../img/Ellipse 49.svg';
import img4 from '../img/favorite.svg';
import img5 from '../img/favorite (1).svg';

function CardLesson() {


    const [showElement, setShowElement] = useState(false)
    const showOrHide = () => setShowElement(true)

    return (
        <>
            <div class ={style.card}>
                <div class ={style.img}>
                    <img src = {img} alt='image'/>

                    <div class = {style.fav}>
                        <img id= {style.img3} src={img3}/>
                    </div>
                    <img id= {style.img4} src={img4}  onClick={showOrHide}/>
                    {showElement ? <img id={style.img5} src={img5} onClick={showOrHide} /> : true }
                </div>   

                <div class={style.container}>
                    <div class={style.card_lesson}>
                        <div class={style.info_card}>
                            <p class={style.card_title}><span>Lógica de Programação</span></p>
                            <p>JAVA ° HTML ° CSS</p>
                            <p><span>Feito por:</span>Helen Pêra</p>
                            <p>Em andamento</p>
                            <div class={style.rate}>
                                <img src={img2}></img>
                                <p>4.0 (1987)</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardLesson