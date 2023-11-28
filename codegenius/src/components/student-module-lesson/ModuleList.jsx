import React from "react";
import api from "../../Api";
import style from './ModuleList.module.css'
import Module from "./Module";

const payload = [
    {
      "id": "5043f7fe-3f66-4da8-bde8-158959459d42",
      "moduleName": "Lógica de programação",
      "moduleOrder": 1,
      "lessons": [
        {
          "id": "4d64e87e-9608-4432-9f25-9153f4373739",
          "lessonOrder": 2,
          "contentDescription": "aliqua. eiusmod tempor incididunt ut labore et dolore magna Consectetur adipiscing elit, sed do"
        },
        {
          "id": "4b4ae842-f705-4f70-93b3-f193c2b0605d",
          "lessonOrder": 1,
          "contentDescription": "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ]
    },
    {
      "id": "035e053f-972e-40e1-9b95-dcec2a3340e3",
      "moduleName": "Sintaxe",
      "moduleOrder": 2,
      "lessons": [
        {
          "id": "96d444a5-1ce3-441e-b270-45c6929ea6c3",
          "lessonOrder": 1,
          "contentDescription": "Teste de payload de lição do módulo. Lição de sintaxe de número 1 blablablablablablablablabla"
        },
        {
          "id": "1b7c53fa-8151-4353-b028-71d713ecfd00",
          "lessonOrder": 2,
          "contentDescription": "Lição de sintaxe de número 1 blablablablablablablablabla. Teste de payload de lição do módulo."
        }
      ]
    }
]

function ModuleList({ m}) {
  // console.log(modules)
  
    return (
        <>
            <div className={style.modules_container}>
                <span className={style.title}>Lista de módulos:</span>
                <div className={style.modules_list}>
                    {m.map((modulo) => (
                        <Module module={modulo}/>
                    ))}
                </div>           
            </div>
        </>
    )
  }
  
  export default ModuleList