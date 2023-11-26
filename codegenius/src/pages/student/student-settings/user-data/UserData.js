import React from 'react';
import "./UserData.css";

function UserData() {
    return (
    <>
    <div className='container-data'>
      <div className='content-data'>
        <span className='title'>Informações Pessoais</span>
        <div className='content-horizontal'>
        <div className='content-txt'>
          <span>E-mail:</span>
          <span>Primeiro Nome:</span>
          <span>Último Nome:</span>
          <span>Telefone:</span>
          <span>Data de Nascimento:</span>
          <span>CEP:</span>
        </div>
        <div className='content-input'>
          <input placeholder='mariana.ribeiro.@gmail.com'></input>
          <input placeholder='Mariana'></input>
          <input placeholder='Ribeiro'></input>
          <input placeholder='(11) 91234-5678'></input>
          <input placeholder='dd/mm/aaaa'></input>
          <input placeholder='00000-000'></input>
        </div>
        </div>
        <button disabled>Salvar</button>
      </div>  
    </div>
    </>
    )
  }

export default UserData