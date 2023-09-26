export const UPDATE_STATE = "UPDATE_STATE"

export const Reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_STATE:
            return {
                messages: action.payload.messages,
                options: action.payload.options
            }

        default:
            return state
    }
}