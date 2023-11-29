import React from "react";
import api from "../../Api"
import style from "./Profile.module.css"
import pfp from "./imgs/imgtest.png"
import {MdFormatColorFill, MdOutlineGroupAdd} from "react-icons/md"
import {BsCalendarCheck} from "react-icons/bs"
import {LiaMedalSolid} from "react-icons/lia"
import {BsTrophy} from "react-icons/bs"
import Stat from "./Stat";

function Profile() {
    const followStyle = {color: "white", width: "30px", height: "30px"}
    const calendarStyle = {color: "white", width: "42px", height: "47px"}
    const medalStyle = {color: "white", width: "47px", height: "45px"}
    const trophyStyle = {color: "white", width: "35px", height: "40px"}
    
    return (
        <>
            <div className={style.profile_container}>
                <div className={style.profile_info}>
                    <div className={style.pfp_name_section}>
                        <img src={pfp} alt="" srcSet="" />
                        <div className={style.name_email}>
                            <span className={style.name}>Mariana Ribeiro</span>
                            <span className={style.email}>mariana.ribeiro@gmail.com</span>
                        </div>
                    </div>
                    <div className={style.follower_section}>
                        <div className={style.follow_numbers}>
                            <span className={style.following}>Segue 2</span>
                            <span className={style.followers}>Tem 2 seguidores</span>
                        </div>
                        <div className={style.follow_button}>
                            <MdOutlineGroupAdd style={followStyle}/>
                            <span>SIGA UM AMIGO</span>
                        </div>
                    </div>
                    <div className={style.stats_section}>
                        <Stat 
                        icon={<BsCalendarCheck style={calendarStyle}/>} 
                        number={15}
                        text={"Dias seguidos"}
                        />
                        
                        <Stat 
                        icon={<LiaMedalSolid style={medalStyle}/>} 
                        number={4}
                        text={"Pódios"}
                        />
                        
                        <Stat 
                        icon={<BsTrophy style={trophyStyle}/>}
                        number={10682}
                        text={"Total de pontos"}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile



// <div className="day_streak">
//                             <BsCalendarCheck style={calendarStyle} />
//                             <div className="streak-info">
//                                 <span className="streak-days">
//                                     15
//                                 </span>
//                                 <span className="days-info">
//                                     Dias seguidos
//                                 </span>
//                             </div>
//                         </div>
//                         <div className="podiums-section">
//                             <LiaMedalSolid style={medalStyle}/>
//                             <div className="podium-info">
//                                 <span className="podium-qnt">
//                                     4
//                                 </span>
//                                 <span className="podium-text">
//                                     Pódios
//                                 </span>
//                             </div>
//                         </div>
//                         <div className="total-points">
//                             <BsTrophy style={trophyStyle} />
//                             <div className="points-info">
//                                 <span className="total-points">
//                                     10682
//                                 </span>
//                                 <span className="points-text">
//                                     Total de pontos
//                                 </span>
//                             </div>
//                         </div>