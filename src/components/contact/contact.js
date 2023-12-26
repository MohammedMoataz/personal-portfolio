import React, { useContext, useState } from 'react'
import {
    Box,
    Stack,
} from '@mui/material'
import emailjs from '@emailjs/browser'
import Lottie from "react-lottie"

import Header from './../../utils/header.js'
import { AppContext } from './../../context/context/context.js'
import { ColorButton } from './../../utils/button.js'
import Textarea from './../../utils/teaxtarea.js'
import CustomTextField from '../../utils/textfield.js'
import data from '../../data/contact.json'
import contactLottie from './../../assets/lotties/contact.json'

const Contact = () => {
    const { state } = useContext(AppContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.send(data.serviceID, data.templateID, {
            name: name,
            from_email: email,
            message: message,
        }, data.publicKey)
            .then(alert("Email was sent successfully"))
            .catch(err => alert(err.message))
    }

    return (
        <Box textAlign={"center"}>
            <Header color={state.color.light} title='GET IN TOUCH' />
            <Stack
                direction={"row"}
                justifyContent="space-between"
                alignItems={"center"}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <Box
                    sx={{
                        width: { xs: "100%", md: "55%", xl: "50%" },
                        bgcolor: 'transparent',
                        border: `1px solid ${state.color.primary}`,
                        boxShadow: `0px 0px 5px 1px ${state.color.primary}`,
                        borderRadius: 5,
                        padding: 5,
                    }}>
                    <form onSubmit={handleSubmit}>
                        <CustomTextField
                            type="text"
                            variant='standard'
                            label="Name"
                            onChange={e => setName(e.target.value)}
                            value={name}
                            fullWidth
                            required
                            sx={{ mb: 2 }}
                        />
                        <CustomTextField
                            type="email"
                            variant='standard'
                            label="Email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            fullWidth
                            required
                            sx={{ mb: 4 }}
                        />
                        <Textarea
                            aria-label="message"
                            minRows={5}
                            placeholder="Enter your message here..."
                            onChange={e => setMessage(e.target.value)}
                            value={message}
                            required
                            aria-multiline={true}
                        />
                        <ColorButton
                            variant="contained"
                            type="submit"
                            size='large'
                            sx={{ width: { xs: 1, md: 1 / 2 } }}
                        >Send</ColorButton>
                    </form>
                </Box>
                <Box
                    sx={{
                        width: { xs: "0%", md: "30%", xl: "30%" },
                        height: { xs: "0%", md: "30%", xl: "30%" },
                    }}>
                    <Lottie
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: contactLottie,
                            rendererSettings: {
                                preserveAspectRatio: "xMidYMid slice",
                            },
                        }}
                        width={"100%"}
                    />
                </Box>
            </Stack>
        </Box>
    )
}

export default Contact