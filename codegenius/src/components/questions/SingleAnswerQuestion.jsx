import React from "react";

import style from './SingleAnswerQuestion.module.css'

import { MdCheck } from "react-icons/md";
import { MdClose } from "react-icons/md";

function SingleAnswerQuestion({ payload  }) {
    // const { questionNumber, statement, questionsInfo, answersInfo } = payload;
    
    const correctStyle = {color: "#2FDE56", width: "20px", height: "20px"}
    const wrongStyle = {color: "#FF3737", width: "20px", height: "20px"}
    let isCorrect = true;
    
    return (
        <>
        <div className={ style.container }>
            <div className={ style.statement }><strong>Questão 1</strong> - O que é uma linguagem de programação e qual é a sua finalidade?</div>
            <div className={ style.answers_container }>
                <label>
                    <input type="radio" name="1" value={1}/>
                    <span>Um livro de receitas para computadores.</span>
                </label>
                <label>
                    <input type="radio" name="1" value={2}/>
                    <span>Um conjunto de regras para criar sopa.</span>
                </label>
                <label>
                    <input type="radio" name="1" value={3}/>
                    <span>Um idioma especial para instruir computadores a realizar tarefas.</span>
                </label>
                <label>
                    <input type="radio" name="1" value={4}/>
                    <span>Um guia para aprender línguas estrangeiras.</span>
                </label>
            </div>
            <div className={ style.result } style={isCorrect ? {border: "solid 1px #2FDE56", color: "#2FDE56"} : {border: "solid 1px #FF3737", color: "#FF3737"}}>
                <div className={ style.correct_wrong }>
                    <span>{isCorrect ? "Correto" : "Errado"}</span>
                    {isCorrect ? <MdCheck style={correctStyle}/> : <MdClose style={wrongStyle}/>}
                </div>
                <div className={ style.explanation }>
                    <span>Uma linguagem de programação tem como objetivo instruir os computadores para exercer uma tarefa</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default SingleAnswerQuestion