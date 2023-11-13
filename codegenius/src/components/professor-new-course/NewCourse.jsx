import React from "react";
import api from "../../Api"
import style from './NewCourse.module.css'

import {MdUploadFile} from "react-icons/md"
import InputWithIcon from "./InputWithIcon";
import TextAreaWithIcon from "./TextAreaWithIcon";
import {RiText} from 'react-icons/ri'
import {IoText} from 'react-icons/io5'


function NewCourse() {
    const uploadStyle = {color: "white", width: "100px", height: "100px"}
    const titleIconStyle = {color: "#FFF", height: "18px", width: "18px"}
    const titleDivStyle = {width: "595px", height: "56px"}
    const titlePlaceholderText = "Adicione o título"
    const descriptionDivStyle = {color: "#FFF", width: "595px", height: "143px"}
    const descriptionPlaceholderText = "Adicione uma breve descrição"
    
    return (
        <>
            <div className={style.new_course_wrapper}>
                <div className={style.img_upload_section}>
                    <div className={style.color_blend}>
                        <div className={style.upload_text}>
                            <MdUploadFile htmlFor="add-img" style={uploadStyle}/>
                            <label htmlFor="add-img">Clique aqui</label>
                            <input type="file" id="add-img" />
                        </div>
                    </div>
                </div>
                <div className={style.course_infos}>
                    <div className={style.inputs_section}>
                        <InputWithIcon
                        icon={<RiText style={titleIconStyle}/>} 
                        inputDivStyle={titleDivStyle}
                        placeholder={titlePlaceholderText}
                        />
                        <TextAreaWithIcon
                        icon={<IoText style={titleIconStyle} />}
                        textAreaDivStyle={ descriptionDivStyle }
                        placeholder={ descriptionPlaceholderText }
                        />
                        <div className={style.language_selection}>
                            <span>Selecione as linguagens:</span>
                            <select name="" id="">
                                <option value="1">JavaScript</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewCourse