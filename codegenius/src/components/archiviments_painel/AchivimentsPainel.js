import React from "react";
import style from "./ArchivimentsPainel.module.css";
import img from "../../img/Group72.svg"
import img2 from "../../img/Frame 96.svg"
import img3 from "../../img/Group 73.svg"
import img4 from "../../img/Image 4.svg"

function ArchivimentsPainel(){
        return(

            <div className= {style.container}>
                <div className={style.title}>
                    <h3>Missões</h3>
                </div>

                <div className= {style.archiviments}>
                    <div className={style.card}>
                        <img src={img}/>
                        <div className={style.info}>
                        <h2>Nome da missão</h2>
                        <h3>Complete 7 dias de ofensiva</h3>
                        <img src={img2}/>
                        </div>
                    </div>

                    <div className={style.card}>
                        <img src={img3}/>
                        <div className={style.info}>
                        <h2>Nome da missão</h2>
                        <h3>Complete 7 dias de ofensiva</h3>
                        <img src={img2}/>
                        </div>
                    </div>

                    <div className={style.card}>
                        <img src={img4}/>
                        <div className={style.info}>
                        <h2>Nome da missão</h2>
                        <h3>Complete 7 dias de ofensiva</h3>
                        <img src={img2}/>
                        </div>
                    </div>
                </div>

                <div className={style.modal}>
                    <h3>Ver Mais</h3>
                </div>
            </div>

        );
}

export default ArchivimentsPainel;