import "./CardInstitucional.css";
import React, { useState, useEffect } from 'react';

import cardOneImg1 from '../../img/Icon_Mission_white.svg';
import cardOneImg2 from '../../img/Icon_Mission_hover.svg';
import cardTwoImg1 from '../../img/Icon_Vision_white.svg';
import cardTwoImg2 from '../../img/Icon_Vision_hover.svg';
import cardThreeImg1 from '../../img/Icon_Values_white.svg';
import cardThreeImg2 from '../../img/Icon_Values_hover.svg';

function CardInstitucional() {
    const [cardOneImage, setCardOneImage] = useState(cardOneImg1)
    const [cardTwoImage, setCardTwoImage] = useState(cardTwoImg1)
    const [cardThreeImage, setCardThreeImage] = useState(cardTwoImg1)

    const handleImageChange = (setter, img) => {
        setter(img)
    }

    return (
        <>
            <div className='card' onMouseEnter={() => handleImageChange(setCardOneImage, cardOneImg2)} onMouseLeave={() => handleImageChange(setCardOneImage, cardOneImg1)}>
                <div className='card-content'>
                    <img className="mission-img" src={cardOneImage} />
                    <h1>missão</h1>
                    <p>Queremos oferecer educação gratuita e consistente para todas as pessoas.</p>
                </div>
            </div>
            <div className='card' onMouseEnter={() => handleImageChange(setCardTwoImage, cardTwoImg2)} onMouseLeave={() => handleImageChange(setCardTwoImage, cardTwoImg1)}>
                <div className='card-content'>
                    <img className='mission-img' src={cardTwoImage} />
                    <h1>visão</h1>
                    <p>Nossa visão é motivar as pessoas a aprender e aprimorar seu conhecimento técnico.</p>
                </div>
            </div>
            <div className='card' onMouseEnter={() => handleImageChange(setCardThreeImage, cardThreeImg2)} onMouseLeave={() => handleImageChange(setCardThreeImage, cardThreeImg1)}>
                <div className='card-content'>
                    <img className='mission-img' src={cardThreeImage} />
                    <h1>valores</h1>
                    <p>Temos como fundamentos confiança mútua e na entrega de um ensino de qualidade.</p>
                </div>
            </div>
        </>
    );
}
export default CardInstitucional;