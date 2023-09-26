import React, { createContext, useReducer } from "react"

import appReducer from "./../reducers/appReducer.js"

export const AppContext = createContext()

export const AppProvider = (props) => {
    const appInitialState = {
        color: {
            primary: '#40718D',
            secondary: '#6286A1',
            stone: '#173653',
            teal: '#368F80',
            light: '#FAFAFA',
            dark: '#1E1E1E',
        },
    }

    const [state, dispatch] = useReducer(appReducer, appInitialState)

    return (
        <AppContext.Provider value={{ state: state, dispatch: dispatch }}>
            {props.children}
        </AppContext.Provider>
    )
}