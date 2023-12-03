import React, { useContext, useEffect, useState } from 'react'
import style from  './Exercises.module.css'
import SingleAnswerQuestion from "../../../components/questions/SingleAnswerQuestion"
import ExercisesJSON from './ExercisesJson'
import { ContextQuestion } from '../../../context/contextQuestion'

import { MdCheck } from "react-icons/md";
import { MdClose } from "react-icons/md";

function Exercises() {

    const correctStyle = {color: "#2FDE56", width: "20px", height: "20px"}
    const wrongStyle = {color: "#FF3737", width: "20px", height: "20px"}
    const [contextState, dispatch] = useContext(ContextQuestion)
    

    const questoes = ExercisesJSON()
    const [userAswer, setUserAswer] = useState([])
    const [isVisible, setIsVisible] = useState(false)
    
    let teste = []
    let data = []

    function getAswer(id, aswer, explicacao){
        console.log("entrou")
        data = teste.map(item => {
                if(item.id == id){
                    item.aswerCorrect = aswer
                    item.explicacao = explicacao
                }

                return item
            })
        
    }

    function visibleAswer(){
        if(!isVisible){
            const inputs = document.querySelectorAll('.answer')
            inputs.forEach((item, index) => {
                if(!item.checked){
                    item.setAttribute("disabled", true)
                }
            }
            )
        }else{
            const inputs = document.querySelectorAll('.answer')
            inputs.forEach(item => {
                if(!item.checked){
                    item.removeAttribute("disabled")
                }
            }
            )
        }
        setIsVisible(!isVisible)
        
    }


    useEffect(() => {
       
        if(contextState?.questions.length > 0) return
        questoes.map(item => {
           dispatch({type: "ADD-QUESTIONS", payload: { 
            id: item.id,
            answerCorrect: false,
            explicacao: "",
            }
        
        })        
        })

        console.log(contextState?.questions)
        
    }, [])

  return (
    <div>
        {questoes.map((exercise, index) => (
            <>
            <SingleAnswerQuestion 
            questionNumber={index + 1}
            onGetAswer={getAswer}
            exercise={exercise}
            />
                   
                {isVisible && (
                    <div className={ style.result } style={contextState.questions[index]?.correta ? {border: "solid 1px #2FDE56", color: "#2FDE56"} : {border: "solid 1px #FF3737", color: "#FF3737"}}>
                    <div className={ style.correct_wrong }>
                        <span>{contextState.questions[index]?.correta  ? "Correto" : "Errado"}</span>
                        {contextState.questions[index]?.correta  ? <MdCheck style={correctStyle}/> : <MdClose style={wrongStyle}/>}
                    </div>
                    <div className={ style.explanation }>
                        <span>{contextState.questions[index]?.explicacao} </span>
                    </div>
                </div>
                )}
                    

            </>
        ))}
        
        <button className={style.btn_corrigir} onClick={() => visibleAswer()}>{isVisible ? "Tentar Novamente": "Corrigir"}</button>
    </div>
  )
}

export default Exercises