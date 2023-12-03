import { React, useState } from 'react'

import { MdOutlineModeEditOutline } from "react-icons/md";
import "./DataTeacher.css"

function DataTeacher() {

    const [isEditable, setIsEditable] = useState(false);

    function handleEditVisible() {
        setIsEditable(!isEditable);
    }

    return (
        <>
            <div className='container-data-teacher'>

                <div className='content-data-teacher'>
                    <h3>Informações Pessoais</h3>
                    <div className='content-al-hr'>
                        <div className='content-vtl'>
                            <div className='edit-teacher'>
                                <span className='title-shadow-teacher'>Primeiro Nome</span>
                                <input placeholder='Nome' readOnly={isEditable}></input>
                            </div>
                            <div className='edit-teacher'>
                                <span className='title-shadow-teacher'>E-mail</span>
                                <input placeholder='email@gmail.com'  readOnly={isEditable}></input>
                            </div>
                        </div>
                        <div className='content-vtl'>
                            <div className='edit-teacher'>
                                <span className='title-shadow-teacher'>Último Nome</span>
                                <input placeholder='Sobrenome'  readOnly={isEditable}></input>
                            </div>
                            <div className='edit-teacher'>
                                <span className='title-shadow-teacher'>Telefone</span>
                                <input placeholder='11 91234-5678' readOnly={isEditable}></input>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => handleEditVisible()}> {isEditable ? "Editar" : "Salvar"}
                {isEditable ? <MdOutlineModeEditOutline className='icon-edit-btn' /> : ""} </button>

            </div>
        </>
    )
}

export default DataTeacher