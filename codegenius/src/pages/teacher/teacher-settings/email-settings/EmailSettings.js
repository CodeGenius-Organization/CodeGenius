import { React, useState } from 'react'

import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import "./EmailSettings.css"

function EmailSettings() {

    const [isEditable, setIsEditable] = useState(true);
    const [isChangeEmail, setChangeEmail] = useState(true);

    function handleEditVisible() {
        setIsEditable(!isEditable);
    }
    function handleChangeEmail() {
        setChangeEmail(!isChangeEmail);
    }

    return (
        <>
            <div className='container-data-teacher-em'>
                <div className='content-data-teacher-em'>
                    {isChangeEmail ?
                        (<>
                            <h3>E-mail:</h3>
                            <button 
                            disabled={isEditable}>
                                Confirmação de e-mail
                            </button>
                            <FaCheckCircle className='checkEmail' />
                            <span>e-mail atual confirmado</span>
                            <button
                                onClick={() => { handleChangeEmail() }}
                                
                                disabled={isEditable}
                            >
                                Trocar e-mail
                            </button>
                            
                        </>) :
                        (<>
                            <div className={`content-al-hr-em ${isChangeEmail ? "div-none" : "div-block"}`}>
                                 <div className='content-vtl-cf-em'>
                                    <div className='edit-teacher'>
                                        <span className='title-shadow-teacher'>E-mail atual:</span>
                                        <input  placeholder='fulano@gmail.com' readOnly={isEditable}></input>
                                    </div>
                                    <div className='edit-teacher'>
                                        <span className='title-shadow-teacher'>Novo e-mail</span>
                                        <input placeholder='-' readOnly={isEditable}></input>
                                    </div>
                                    </div>
                            </div>
                        </>)
                    }

                </div>
                <button onClick={() => {
                    handleEditVisible()
                    if(!isChangeEmail){
                        handleChangeEmail()
                    }
                }
                }> {isEditable ? "Editar" : "Salvar"}
                    {isEditable ? <MdOutlineModeEditOutline className='icon-edit-btn' /> : ""} </button>
            </div>
        </>
    )
}

export default EmailSettings