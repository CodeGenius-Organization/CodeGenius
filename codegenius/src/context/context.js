import { createContext, useReducer } from "react";


const initialState = () => {
    const actualState = localStorage.getItem('savedItems');
  
    if (actualState)
        return JSON.parse(actualState)
    
    else return {
        id: [],
        favorites: [],
    }
}


const contextReducer = (state, action) => {
    switch (action.type) {
        case "FAVORITE":
            if (state.id.includes(action.payload.id)) {
                const newFavorites = state.favorites.filter(f => f.id !== action.payload.id)
                const newId = state.id.filter(id => id !== action.payload.id)
                return {
                    ...state,
                    id: newId,
                    favorites: newFavorites,
                }
            }
            return {
                ...state,
                id: [
                    ...state.id,
                    action.payload.id  
                ],
                favorites: [
                    ...state.favorites,
                    action.payload,
                ]
            }
        default:
            return state
    }
}

export const ContextTeste = createContext();

export const ContextProvider = ({ children }) => {
    const value = useReducer(contextReducer, initialState())
    return <ContextTeste.Provider value={value}>{children}</ContextTeste.Provider>
}