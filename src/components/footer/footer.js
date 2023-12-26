import React from 'react'
import {
    Box,
    Stack,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import TelegramIcon from '@mui/icons-material/Telegram'

import data from '../../data/portfolio.json'

const Footer = () => {
    return (
        <Box pb={5}>
            <Stack
                direction={{ xs: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 3 }}
                justifyContent="center"
                alignItems='center'
                py={{ xs: "3%", md: '2%' }}
                width={{ xs: '95%' }}
            >
                <IconButton
                    aria-label="Gmail"
                    href={data.gmail.url}
                    target='_blank'
                    sx={{
                        color: "#FFFFFF",
                        '&:hover': {
                            boxShadow: '0px 0px 7px 2px #368F80',
                        },
                    }}
                    title={data.gmail.title}
                >
                    <EmailIcon fontSize='large' />
                </IconButton>
                <IconButton
                    aria-label="LinkedIn"
                    href={data.linkedin.url}
                    target='_blank'
                    sx={{
                        color: "#FFFFFF",
                        '&:hover': {
                            boxShadow: '0px 0px 7px 2px #368F80',
                        },
                    }}
                    title={data.linkedin.title}
                >
                    <LinkedInIcon fontSize='large' />
                </IconButton>
                <IconButton
                    aria-label="GitHub"
                    href={data.github.url}
                    target='_blank'
                    sx={{
                        color: "#FFFFFF",
                        '&:hover': {
                            boxShadow: '0px 0px 7px 2px #368F80',
                        },
                    }}
                    title={data.github.title}
                >
                    <GitHubIcon fontSize='large' />
                </IconButton>
                <IconButton
                    aria-label="Facebook"
                    href={data.facebook.url}
                    target='_blank'
                    sx={{
                        color: "#FFFFFF",
                        '&:hover': {
                            boxShadow: '0px 0px 7px 2px #368F80',
                        },
                    }}
                    title={data.facebook.title}
                >
                    <FacebookIcon fontSize='large' />
                </IconButton>
                <IconButton
                    aria-label="Telegram"
                    href={data.telegram.url}
                    target='_blank'
                    sx={{
                        color: "#FFFFFF",
                        '&:hover': {
                            boxShadow: '0px 0px 7px 2px #368F80',
                        },
                    }}
                    title={data.telegram.title}
                >
                    <TelegramIcon fontSize='large' />
                </IconButton>
            </Stack>
        </Box >
    )
}

export default Footer