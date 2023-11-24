import React from "react";
import style from './CardCurse.module.css';
import img from "../img/Group 68.svg"

function CardCurse() {
    return (
        <div className={style.container}>
            <div className={style.card}>
            </div>
            <div className={style.info}>
            <span className={style.bold}>Nome: Nome do curso</span>
                <span>Data Criada:</span>
                <span>Descrição:</span>
                <span>Avaliação:</span>
                <img src={img} />
            </div>

            

        </div>

    );
}



export default CardCurse