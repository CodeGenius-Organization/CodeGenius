import React, {useContext, useState} from 'react'
import "./Achievement.css"
import { ContextTeste } from "../../context/context";


 function Achievement({buttonVisible, data}) {
  
  const [contextState, dispatch] = useContext(ContextTeste);

    return (
      <>
      <div className='achievement-content'>
        <div className='img-content'>
            <img src={data.img} alt="Troféu"/>
        </div>
        <span className='achievement-title'>{data.title}</span>
        <span className='description'>{data.description}</span>
        {buttonVisible && <button
            onClick={() => {
              dispatch({ type: "FAVORITE", payload: data });
            }}
          >
            {contextState.id.includes(data.id) ? "Remover" : "Adicionar"}
          </button>

        }
      </div>
      </>
    )
  }


export default Achievement;