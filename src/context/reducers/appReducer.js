import * as appActionType from "./../actions/appAction.js"

const appReducer = (state, action) => {
    switch (action.type) {
        case appActionType.LIGHT_MODE:
            return { darkMode: false }

        case appActionType.DARK_MODE:
            return { darkMode: true }

        default:
            return state
    }
}

export default appReducer