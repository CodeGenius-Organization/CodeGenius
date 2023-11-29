import React from 'react'
import style from './FormContact.module.css';

function FormContact() {
    return (
        <>

            <div className={style.containerForm}>
                <div className={style.titles}>
                    <p>Fale Conosco</p>
                    <p><span>Iremos nos esforçar para responder o mais breve possível</span></p>
                </div>

                <div className={style.inputs}>
                    <label className={style.inpAssunto} >Assunto:</label>
                    <input type="text" className={style.inputs_form} placeholder="Digite seu assunto aqui" />

                    <label><div id={style.inpMenssagem}>Menssagem:</div></label>
                    <textarea placeholder="Digite sua menssagem aqui..."></textarea>
                </div>

                <div className={style.enderecoEmail}>
                    <label className={style.container}><p>Marque esta caixinha se não enviará o e-mail pelo endereço mariana.ribeiro@gmail.com</p>
                        <input type="checkbox" checked={style.checked} />
                        <span className={style.checkmark}></span>
                    </label>

                    <div className={style.enderecoDeEmail}>
                        <label>Endereço de e-mail:</label>
                        <input id={style.inpEnderecoDeEmail} type="email" className={style.inputs_form} placeholder="marianariberio@gmail.com" />

                        <button>
                            <div className={style.svg_wrapper_1}>
                                <div className={style.svg_wrapper}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                    </svg>
                                </div>
                            </div>
                            <span>Enviar</span>
                        </button>
                    </div>

                </div>
            </div>

        </>
    );
}

export default FormContact