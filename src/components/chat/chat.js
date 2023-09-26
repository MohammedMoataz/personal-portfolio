import React, { useContext, useState } from "react"
import { Box, Stack } from "@mui/material"

import ChatbotState from "./state.js"
import { useChatbot } from "./../../hooks/chatbot/useChatbot.js"
import Messages from "./messages/Messages.js"
import Options from "./options/Options.js"
import Form from "./form/Form.js"
import FloatingActionButton from '../../utils/floatingActionButton.js'
import { AppContext } from "../../context/context/context.js"

const Chat = () => {
    const { state } = useContext(AppContext)
    const { chatbotState, chatbotDispatch } = ChatbotState()
    const [show, setShow] = useState(false)

    const { handleOptionClick, handleMessageSubmit } = useChatbot(chatbotState, chatbotDispatch)

    const handleClick = () => setShow(!show)

    return (
        <Stack
            p={2}
            direction={{ xs: 'column' }}
            spacing={{ xs: 3 }}
            justifyContent="flex-end"
            alignItems="flex-end"
            width={{ xs: '80%', md: '50%', lg: '30%' }}
            position='fixed'
            bottom={50}
            right={50}
            borderRadius={5}
            overflow={'hidden'}
            zIndex={100}
        >
            {show
                ? <Box
                    width='100%'
                    p={2}
                    maxHeight={450}
                    border={`1px solid ${state.color.primary}`}
                    borderRadius={5}
                    boxShadow={`0px 0px 10px 1px ${state.color.primary}`}
                    backgroundColor={state.color.light}
                    overflow='scroll'
                >
                    <Messages color={state.color} messages={chatbotState.messages} />
                    <Options color={state.color.primary} options={chatbotState.options} handleOptionClick={handleOptionClick} />
                    <Form color={state.color.primary} handleMessageSubmit={handleMessageSubmit} />
                </Box >
                : null
            }

            <FloatingActionButton handleClick={handleClick} />
        </Stack >
    )
}

export default Chat