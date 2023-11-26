import React from 'react'
import "./Achievement.css"


 function Achievement({buttonVisible, data}) {
    return (
      <>
      <div className='achievement-content'>
        <div className='img-content'>
            <img src={data.img} alt="Troféu"/>
        </div>
        <span className='achievement-title'>{data.title}</span>
        <span className='description'>{data.description}</span>
        {buttonVisible && <button>Mostrar</button>}
      </div>
      </>
    )
  }


export default Achievement;