import "./CardInstitucional.css";
import React, { useState, useEffect } from 'react';

import mission from '../../img/Icon_Mission_white.svg';
import vision from '../../img/Icon_Vision_white.svg';
import values from '../../img/Icon_Values_white.svg';

function CardInstitucional() {
    return (
        <>
            <div className='card'>
                <div className='card-content'>
                    <img className="mission-img" src={mission} />
                    <h1>missão</h1>
                    <p>Queremos oferecer educação gratuita e consistente para todas as pessoas.</p>
                </div>
            </div>
            <div className='card vision'>
                <div className='card-content'>
                    <img className='mission-img' src={vision} />
                    <h1>visão</h1>
                    <p>Nossa visão é motivar as pessoas a aprender e aprimorar seu conhecimento técnico.</p>
                </div>
            </div>
            <div className='card values'>
                <div className='card-content'>
                    <img className='mission-img' src={values} />
                    <h1>valores</h1>
                    <p>Temos como fundamentos confiança mútua e na entrega de um ensino de qualidade.</p>
                </div>
            </div>
        </>
    );
}
export default CardInstitucional;