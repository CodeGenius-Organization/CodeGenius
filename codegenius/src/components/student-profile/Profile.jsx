import React from "react";
import api from "../../Api"
import "./Profile.css"
import pfp from "./imgs/imgtest.png"
import {MdFormatColorFill, MdOutlineGroupAdd} from "react-icons/md"

function Profile() {
    const followStyle = {color: "white", width: "30px", height: "30px"}
    
    return (
        <>
            <div className="profile-container">
                <div className="profile-info">
                    <div className="pfp-name-section">
                        <img src={pfp} alt="" srcset="" />
                        <div className="name-email">
                            <span className="name">Mariana Ribeiro</span>
                            <span className="email">mariana.ribeiro@gmail.com</span>
                        </div>
                    </div>
                    <div className="follower-section">
                        <div className="follow-numbers">
                            <span className="following">Segue 2</span>
                            <span className="followers">Tem 2 seguidores</span>
                        </div>
                        <div className="follow-button">
                            <MdOutlineGroupAdd style={followStyle}/>
                            <span>SIGA UM AMIGO</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile