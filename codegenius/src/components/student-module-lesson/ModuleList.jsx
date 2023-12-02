import React, { useEffect, useState } from "react";
import style from './ModuleList.module.css'
import api from "../../Api";
import Module from "./Module";


function ModuleList({ courseId, onLessonClick }) {
  // useStates
  const [ modules, setModules] = useState([]);
  
  
  // api
  const getModules = async () => {
    try {
      const response = await
        api.get(`course/modules/${courseId}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${sessionStorage.getItem("authToken")}`
          }
        });

        if (response.status === 200) {
          console.log("Sucesso ao pegar os módulos do curso " + courseId);
          setModules(response.data);
          console.log(response.data)
        }
    } catch (error) {
      console.log(error);
      throw new Error("Ocorreu um erro interno");
    }
  }

  
  // useEffect
  useEffect(() => {
    courseId && getModules(courseId);
  }, [courseId])
  

  // component render
    return (
        <>
            <div className={ style.modules_container }>
                <span className={ style.title }>Lista de módulos:</span>
                <div className={ style.modules_list }>
                    { modules && modules.map((module) => (
                        <Module 
                        module={ module } 
                        key={ module.id }
                        onLessonClick={ onLessonClick }/>
                    ))}
                </div>           
            </div>
        </>
    )
  }
  
  export default ModuleList