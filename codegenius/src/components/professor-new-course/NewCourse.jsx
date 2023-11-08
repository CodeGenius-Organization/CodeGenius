import React from "react";
import api from "../../Api"
import './NewCourse.css'

import {MdUploadFile} from "react-icons/md"
import InputWithIcon from "./InputWithIcon";
import TextAreaWithIcon from "./TextAreaWithIcon";
import {RiText} from 'react-icons/ri'
import {IoText} from 'react-icons/io5'


function NewCourse() {
    const uploadStyle = {color: "white", width: "60px", height: "60px"}
    const titleIconStyle = {color: "#FFF", height: "18px", width: "18px"}
    const titleDivStyle = {width: "595px", height: "56px"}
    const titlePlaceholderText = "Adicione o título"
    const descriptionDivStyle = {color: "#FFF", width: "595px", height: "143px"}
    const descriptionPlaceholderText = "Adicione uma breve descrição"
    
    return (
        <>
            <div className="new-course-wrapper">
                <div className="img-upload-section">
                    <div className="color-blend">
                        <div className="upload-text">
                            <MdUploadFile htmlFor="add-img" style={uploadStyle}/>
                            <label htmlFor="add-img">Clique aqui</label>
                            <input type="file" id="add-img" />
                        </div>
                    </div>
                </div>
                <div className="course-infos">
                    <div className="inputs-section">
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
                        <div className="language-selection">
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