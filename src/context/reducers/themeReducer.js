const themeReducer = (state, action) => {
    switch (action.type) {
        case "LIGHTMODE":
            return { darkMode: false }

        case "DARKMODE":
            return { darkMode: true }

        default:
            return state
    }
}

export default themeReducer