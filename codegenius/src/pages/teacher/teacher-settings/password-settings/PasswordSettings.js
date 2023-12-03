import { React, useState } from 'react'

import { MdOutlineModeEditOutline } from "react-icons/md";
import "./PasswordSettings.css"

function PasswordSettings() {

    const [isEditable, setIsEditable] = useState(true);
    const [isChangePass, setChangePass] = useState(true);

    function handleEditVisible() {
        setIsEditable(!isEditable);
    }
    function handleChangePass() {
        setChangePass(!isChangePass);
    }

    return (
        <>
            <div className='container-data-teacher-ps'>
                <div className='content-data-teacher-ps'>
                    {isChangePass ?
                        (<>
                            <h3>Sua conta</h3>
                            <button
                                onClick={() => { handleChangePass() }}
                                className={`${isChangePass ? "btn-block" : "btn-none" }`}
                                disabled={isEditable}
                            >
                                Trocar Senha
                            </button>
                        </>) :
                        (<>
                            <div className={`content-al-hr-ps ${isChangePass ? "div-none" : "div-flex"}`}>
                                <div className='content-vtl-cf-ps'>
                                    <div className='edit-teacher-ps'>
                                        <span className='title-shadow-teacher'>Senha:</span>
                                        <input type='password' placeholder='*********' readOnly={isEditable}></input>
                                    </div>
                                    <div className='edit-teacher'>
                                        <span className='title-shadow-teacher'>Confirmação de Senha</span>
                                        <input type='password' placeholder='*********' readOnly={isEditable}></input>
                                    </div>
                                </div>

                                <div className='hint'>
                                        <ul>
                                            <li>Sua senha deve conter no minimo 8 caracteres;</li>
                                            <li>No mínimo dois números;</li>
                                            <li>Pelo menos um caractere especial;</li>
                                            <li>Pelo menos uma letra maiúscula;</li>
                                            <li>Pelo menos uma letra minúscula;</li>
                                        </ul>
                                </div>
                            </div>
                        </>)
                    }

                </div>
                <button onClick={() => {
                    handleEditVisible()
                    if(!isChangePass){
                        handleChangePass()
                    }
                }
                }> {isEditable ? "Editar" : "Salvar"}
                    {isEditable ? <MdOutlineModeEditOutline className='icon-edit-btn' /> : ""} </button>
            </div>
        </>
    )
}

export default PasswordSettings