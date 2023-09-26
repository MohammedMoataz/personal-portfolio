import { useReducer } from "react"

import { Reducer } from "./reducer"
import data from "../../data/chat.json"

export const ChatbotState = () => {
    const InitialState = {
        messages: [{
            msg: data[0].res,
            type: "bot"
        }],
        options: data[0].options
    }
    const [chatbotState, chatbotDispatch] = useReducer(Reducer, InitialState)

    return { chatbotState, chatbotDispatch }
}

export default ChatbotState