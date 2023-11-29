import React from "react";
import style from "./ProfilePainel.module.css"
import img from '../img/gato2.png';
import img2 from '../img/group_add.svg';
import img3 from '../img/calendar_month.svg';
import img4 from '../img/social_leaderboard.svg';
import img5 from '../img/your_trips.svg';

function ProfilePainel() {
    return (

        <div className={style.container}>
            <div className={style.infoUser}>
                <div className={style.picture}>
                    <img src={img} />
                </div>
                <div className={style.name}>
                    <span><h1>Mariana Ribeiro</h1></span>
                    <span><h2>mariana.ribeiro@gmail.com</h2></span>
                </div>
            </div>

            <div className={style.followers}>
                <span><h1>Segue:  2</h1></span>
                <span><h1>Tem 2 seguidores</h1></span>
                <button class= {style.Btn}>
                <img src={img2}/>
                <div class={style.sing}><svg viewBox="0 0 515 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
                    <div class={style.text}>SIGA UM AMIGO</div>
                </button>
            </div>

            <div className={style.info}>
                <div className={style.label}><img src={img3} alt='image'/><span>15<br/>Dias seguidos</span></div>
                <div className={style.label2}><img src={img4} alt='image'/><span>4<br/>Pódios</span></div>
                <div className={style.label3}><img src={img5} alt='image'/><span>1062<br/>Total de pontos</span></div>
            </div>
        </div>

    );
}

export default ProfilePainel;