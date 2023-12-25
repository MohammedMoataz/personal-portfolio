import React, { useContext } from 'react'
import {
    Box,
    Stack,
    Typography
} from '@mui/material'

import { AppContext } from './../../context/context/context.js'

import gmailLottie from './../../assets/lotties/gmail.json'
import linkedinLottie from './../../assets/lotties/linkedin.json'
import facebookLottie from './../../assets/lotties/facebook.json'
import githubLottie from './../../assets/lotties/github.dark.json'
import telegramLottie from './../../assets/lotties/telegram.json'
import data from '../../data/portfolio.json'
import CustomButtonBase from '../../utils/buttonbase.js'

const Footer = () => {
    const { state } = useContext(AppContext)

    return (
        <Box>
            <Stack
                direction={{ xs: 'column-reverse', md: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent="space-evenly"
                alignItems='center'
                py={{ xs: "3%", md: '2%' }}
            >
                <Typography
                    color={state.color.primary}
                    fontWeight={700}
                    fontSize={{ xs: 14, sm: 16, md: 18, lg: 20 }}
                >
                    Mohammed Moataz 💙 2023
                </Typography>
                <Stack
                    direction={{ xs: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 3 }}
                    justifyContent="flex-start"
                    alignItems='flex-start'
                    sx={{
                        width: { xs: '40%', sm: '30%', md: '25%', lg: '18%' },
                    }}
                >
                    <CustomButtonBase
                        href={data.gmail.url}
                        animationData={gmailLottie}
                        title={data.gmail.title}
                    />
                    <CustomButtonBase
                        href={data.linkedin.url}
                        animationData={linkedinLottie}
                        title={data.linkedin.title}
                    />
                    <CustomButtonBase
                        href={data.facebook.url}
                        animationData={facebookLottie}
                        title={data.facebook.title}
                    />
                    <CustomButtonBase
                        href={data.github.url}
                        animationData={githubLottie}
                        title={data.github.title}
                    />
                    <CustomButtonBase
                        href={data.telegram.url}
                        animationData={telegramLottie}
                        title={data.telegram.title}
                    />
                </Stack>
            </Stack>
        </Box >
    )
}

export default Footer