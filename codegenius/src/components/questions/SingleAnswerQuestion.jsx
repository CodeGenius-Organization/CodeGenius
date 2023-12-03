import React, { useEffect, useContext } from "react";

import style from './SingleAnswerQuestion.module.css'
import { ContextQuestion } from '../../context/contextQuestion'



function SingleAnswerQuestion({ payload, questionNumber, exercise, onGetAswer}) {
    // const { questionNumber, statement, questionsInfo, answersInfo } = payload;

    const [contextState, dispatch] = useContext(ContextQuestion)

      
    function handleClick(id,value,explicacao){
        dispatch({type: "PUT-ASWER", payload: {
            id: id,
            answer: value,
            explicacao: explicacao,
        }})
        console.log(contextState?.questions)
    }

    
    return (
        <form>
        <div className={ style.container }>
            <div className={ style.statement }><strong>Questão {questionNumber}</strong> - {exercise.enunciado}</div>
            <div className={ style.answers_container }>
                {exercise.aswers.map(item => (
                    <label >
                    <input onClick={() => handleClick(exercise.id, item.correta, item.explicacao)
                    } className="answer" type="radio" name="1" value={item.correta}/>
                    <span>{item.resposta}</span>
                </label>
                ))}
            </div>
            
        </div>
        </form>
    )
}

export default SingleAnswerQuestion