import React from "react";
import "./CardOurTeam.css";

function CardNossaEquipe(props) {
    

    return (
        <>
            <div className="card-equipe">
                <div className="card-geral">
                    <img className="image" src={props.person} />
                    <div className="shadow">
                        <h1>{props.name}</h1>
                        <h2>{props.funcao}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardNossaEquipe;