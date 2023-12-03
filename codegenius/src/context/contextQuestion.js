import { createContext, useReducer } from "react";


const initialState = () => {
    const actualState = localStorage.getItem('savedItems');
  
    if (actualState)
        return JSON.parse(actualState)
    
    else return {
        questions: [],
    }
}


const contextReducer = (state, action) => {
    switch (action.type) {
        case "ADD-QUESTIONS":
            return {
                ...state,
                questions: [
                    ...state.questions,
                    {
                        id: action.payload.id,
                        correta: false,
                        explicacao: "",
                }
                ],
            }
            case "PUT-ASWER":
                return {
                    ...state,
                    questions: [
                        ...state.questions.map(item => {
                            if(item.id == action.payload.id){
                                item.correta = action.payload.answer
                                item.explicacao = action.payload.explicacao
                            }
                            return item
                        })
                    ]
                }
        default:
            return state
    }
}

export const ContextQuestion = createContext();

export const ContextProviderQuestion = ({ children }) => {
    const value = useReducer(contextReducer, initialState())
    return <ContextQuestion.Provider value={value}>{children}</ContextQuestion.Provider>
}