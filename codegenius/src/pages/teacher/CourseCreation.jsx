import React from 'react'
import { toast } from 'react-toastify'
import style from '../teacher/CourseCreation.module.css'
import api from '../../Api'

import NewCourse from '../../components/teacher-new-course/NewCourse'
import { MdKeyboardArrowRight } from 'react-icons/md'

function CourseCreation({ onNext, onTitleChange, onDescriptionChange }) {
    const arrowStyle = {color: "#FFF", width: "24px", height: "24px"}
    let title = '', description = '';

    const handleNext = (nextPage) => {
        if (!(title.length) || !(description.length)) {
            toast.error("Preencha os campos!")
        } else {
            onNext(nextPage);
        }
    }
    
    const handleTitleChange = (value) => {
        title = value;
        onTitleChange(value);
    }

    const handleDescriptionChange = (value) => {
        description = value;
        onDescriptionChange(value);
    }
    
    
    return (
        <>
            {/* <div className={style.container}>
                <div className={style.left_section}>

                </div> */}
                <div className={style.main_section}>
                    <div className={style.breadcrumb}>
                        <span className={style.breadcrumb_element}>
                            Criar/Editar cursos
                        </span>
                        <MdKeyboardArrowRight style={arrowStyle}/>
                        <span className={`${style.breadcrumb_element} ${style.now}`}>
                            Criar curso
                        </span>
                    </div>
                    <div className={style.content}>
                        <NewCourse 
                        onTitleChange={ handleTitleChange }
                        onDescriptionChange={ handleDescriptionChange }
                        />
                        <div className={style.buttons}>
                            <button className={style.cancelar}>Cancelar</button>
                            <button className={style.criar} onClick={() => handleNext('create-module') }>Criar módulo</button>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default CourseCreation