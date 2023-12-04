import React, { useState } from "react";
import ccStyle from './CourseCreation.module.css'
import mcStyle from './ModuleCreation.module.css'

import TextAreaWithIcon from "../../components/teacher-new-course/TextAreaWithIcon";

import { MdKeyboardArrowRight } from 'react-icons/md'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { IoIosRemoveCircleOutline } from "react-icons/io";

function ModuleCreation({ onNext }) {
    const [modules, setModules] = useState([]);

    const handleNext = (nextPage) => {
        onNext(nextPage)
    }

    const handleAddModule = () => {
        const newModule = `Módulo ${modules.length + 1}`
        setModules([...modules, newModule])
    }

    const handleRemoveModule = () => {
        const updatedModules = modules.filter((module, index))
    }

    const arrowStyle = { color: "#FFF", width: "24px", height: "24px" }
    const titleDivStyle = { width: "auto", height: "164px" }
    const listIconStyle = { color: "#A1A1A1", width: "18px", height: "18px" }

    return (
        <>
            {/* <div className={ccStyle.container}>
                <div className={ccStyle.left_section}>

                </div> */}
            <div className={ccStyle.main_section}>
                <div className={ccStyle.breadcrumb}>
                    <span className={ccStyle.breadcrumb_element}>
                        Criar/Editar cursos
                    </span>
                    <MdKeyboardArrowRight style={arrowStyle} />
                    <span className={ccStyle.breadcrumb_element}>
                        Criar curso
                    </span>
                    <MdKeyboardArrowRight style={arrowStyle} />
                    <span className={`${ccStyle.breadcrumb_element} ${ccStyle.now}`}>
                        Criar módulo
                    </span>
                </div>
                <div className={mcStyle.content}>
                    <div className={mcStyle.module_section}>
                        <div className={mcStyle.course_select_section}>
                            <span>Curso:</span>
                            <select name="" id="">
                                <option value="0">Nome do curso</option>
                            </select>
                        </div>
                        <div className={mcStyle.module_list}>
                            {modules.map((module) => (
                                <div className={ mcStyle.item }>
                                    <span>
                                        {module}
                                    </span>
                                    <IoIosRemoveCircleOutline 
                                    onClick={() => handleRemoveModule }
                                    style={{height: "30px", width: "30px"}} 
                                    className={ mcStyle.remove_module }/>
                                </div>
                            ))}
                        </div>
                        <button className={mcStyle.btn} onClick={() => handleAddModule()}>
                            adicionar + módulos
                        </button>
                    </div>
                    <div className={mcStyle.edit_section}>
                        <div className={mcStyle.input_section}>
                            <TextAreaWithIcon
                                icon={<AiOutlineUnorderedList style={listIconStyle} />}
                                textAreaDivStyle={titleDivStyle}
                                placeholder={"Título..."}
                            />
                        </div>
                        <div className={mcStyle.buttons_section}>
                            <button className={mcStyle.btn}>adicionar conteúdo</button>
                            <button className={mcStyle.btn}>adicionar exercícios</button>
                            <button className={mcStyle.btn}>adicionar prova</button>
                        </div>
                    </div>
                </div>
                <div className={mcStyle.finish_buttons}>
                    <button className={mcStyle.finish_btn} onClick={() => handleNext("importar-exportar")}>Importar/Exportar</button>
                    <button className={mcStyle.finish_btn}>Salvar</button>
                    <button className={mcStyle.finish_btn}>Próximo</button>
                </div>
            </div>
        </>
    )
}

export default ModuleCreation