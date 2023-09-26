import { UPDATE_STATE } from "./../../components/chat/reducer.js"
import * as chatbotHelper from "./chatbotHelper.js"

export const useChatbot = (chatbotState, chatbotDispatch) => {
    const handleOptionClick = op => chatbotDispatch({
        type: UPDATE_STATE,
        payload: chatbotHelper.handleOptionClick(chatbotState, op)
    })

    const handleMessageSubmit = msg => chatbotDispatch({
        type: UPDATE_STATE,
        payload: chatbotHelper.handleMessageSubmit(chatbotState, msg)
    })

    return ({
        handleOptionClick,
        handleMessageSubmit
    })
}