import React from 'react'
import style from '../teacher-import-txt/ImportExport.module.css'
import api from '../../../Api'

import NewCourse from '../../../components/teacher-new-course/NewCourse'

import { MdKeyboardArrowRight } from 'react-icons/md'
import { MdUploadFile } from "react-icons/md"

function CourseCreation({ onNext }) {

    const handleNext = (nextPage) => {
        onNext(nextPage);
    }

    const arrowStyle = { color: "#FFF", width: "24px", height: "24px" }

    return (
        <>
            <div className={style.main_section}>
                <div className={style.breadcrumb}>
                    <span className={style.breadcrumb_element}>
                        Criar/Editar cursos
                    </span>
                    <MdKeyboardArrowRight style={arrowStyle} />
                    <span className={style.breadcrumb_element}>
                        Criar curso
                    </span>
                    <MdKeyboardArrowRight style={arrowStyle} />
                    <span className={`${style.breadcrumb_element} ${style.now}`}>
                        Criar módulo
                    </span>
                </div>
                <div className={style.content}>
                    <h1>Importação/Exportação</h1>
                    <div className={style.import_export}>
                        <div className={style.import}>
                            <MdUploadFile htmlFor="add-img" className={style.upload_img} />
                            <h1>Clique aqui para importar</h1>
                        </div>
                        <div className={style.export}>
                            <button>Clique para exportar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCreation