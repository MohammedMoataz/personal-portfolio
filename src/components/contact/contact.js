import React, { useContext, useState } from 'react'
import {
    Box,
    Stack,
    TextField,
    Typography
} from '@mui/material'
import emailjs from '@emailjs/browser'

import Header from './../../utils/header.js'
import { ThemeContext } from './../../context/context/context.js'
import { ColorButton } from './../../utils/button.js'
import Textarea from './../../utils/teaxtarea.js'

const Contact = () => {
    const { state } = useContext(ThemeContext)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.send("service_xd021bp", "template_q0zd5sj", {
            subject: subject,
            first_name: firstName,
            last_name: lastName,
            from_email: email,
            message: message,
        }, 'hKz5juDDjUToa43gj')
            .then(alert("Email was sent successfully"))
            .catch(err => alert(err.message))
    }

    return (
        <Box>
            <Header color={state.color.light} title='CONTACT' />
            <Stack
                direction={{ xs: 'column' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <Box
                    sx={{
                        width: '100%',
                        backgroundColor: state.color.light,
                        borderRadius: 5,
                        padding: 5,
                    }}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                            color: state.color.primary,
                            fontWeight: 700,
                            fontSize: { xs: 20, sm: 24, md: 26, lg: 28 },
                            mb: 4,
                            textAlign: 'center',
                        }}
                    >
                        GET IN TOUCH
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={4} direction="row" sx={{ mb: 4 }}>
                            <TextField
                                type="text"
                                variant='standard'
                                label="First Name"
                                onChange={e => setFirstName(e.target.value)}
                                value={firstName}
                                fullWidth
                                required
                            />
                            <TextField
                                type="text"
                                variant='standard'
                                label="Last Name"
                                onChange={e => setLastName(e.target.value)}
                                value={lastName}
                                fullWidth
                                required
                            />
                        </Stack>
                        <TextField
                            type="email"
                            variant='standard'
                            label="Email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            fullWidth
                            required
                            sx={{ mb: 4 }}
                        />
                        <TextField
                            type="text"
                            variant='standard'
                            label="Subject"
                            onChange={e => setSubject(e.target.value)}
                            value={subject}
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
            </Stack>
        </Box>
    )
}

export default Contact