import React from 'react'
import './Privaty.css'
import pfp from "../../../../components/student-profile/imgs/imgtest.png"
import { MdOutlineModeEditOutline } from "react-icons/md";

function Privaty() {
  return (
    <div className='privaty-container'>
        <div className='header-privaty'>
            <h3>Foto do Perfil</h3>
            <div className='profile-img-container'>
                <img className="profile-img" src={pfp} alt="" />
                <div className='edit'>
                    <MdOutlineModeEditOutline className='icon-edit'/>
                </div>
            </div>
        </div>
        <div className='body-privaty'>
            <h3>Exibição</h3>
                <div className='status-privaty'>
                    <div className='status-content'>
                        <label>Aba Perfil</label>
                        <div className="custom-select">
                            <select>
                                <option value=""> Visível </option>
                            </select>
                        </div>
                    </div>
                    <div className='status-content'>
                        <label>E-mail</label>
                        <div className="custom-select">
                            <select>
                                <option value=""> Visível </option>
                            </select>
                        </div>
                    </div>
                    <div className='status-content'>
                        <label>Conquistas</label>
                        <div className="custom-select">
                            <select>
                                <option value=""> Visível </option>
                            </select>
                        </div>
                    </div>
                    <div className='status-content'>
                        <label>Missões</label>
                        <div className="custom-select">
                            <select>
                                <option value=""> Visível </option>
                            </select>
                        </div>
                    </div>
                    <div className='status-content'>
                        <label>Lista de Cursos</label>
                        <div className="custom-select">
                            <select>
                                <option value=""> Visível </option>
                            </select>
                        </div>
                    </div>
                </div>
            <button>Salvar</button>
        </div>
        <button>Trocar Senha</button>
    </div>
  )
}

export default Privaty