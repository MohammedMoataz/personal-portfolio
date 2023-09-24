import React, { useContext } from 'react'
import {
    Box,
    ButtonBase,
    Stack,
    Typography
} from '@mui/material'
import Lottie from 'react-lottie'

import gmailLottie from './../../assets/lotties/gmail.json'
import linkedinLottie from './../../assets/lotties/linkedin.json'
import facebookLottie from './../../assets/lotties/facebook.json'
import githubLottie from './../../assets/lotties/github.dark.json'

import { ThemeContext } from './../../context/context/context.js'

const Footer = () => {
    const { state } = useContext(ThemeContext)

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
                    <ButtonBase
                        href='mailto:imohammedmoataz@gmail.com'
                        target='_blank'
                        sx={{ width: '25%' }}
                    >
                        <Lottie
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData: gmailLottie,
                                rendererSettings: {
                                    preserveAspectRatio: "xMidYMid slice",
                                },
                            }}
                            width={"100%"}
                            title='Gmail'
                        />
                    </ButtonBase>
                    <ButtonBase
                        href='https://www.linkedin.com/in/mohammed-moataz/'
                        target='_blank'
                        sx={{ width: '25%' }}
                    >
                        <Lottie
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData: linkedinLottie,
                                rendererSettings: {
                                    preserveAspectRatio: "xMidYMid slice",
                                },
                            }}
                            width={"100%"}
                            title='LinkedIn'
                        />
                    </ButtonBase>
                    <ButtonBase
                        href='https://www.facebook.com/mo.moatazz/'
                        target='_blank'
                        sx={{ width: '25%' }}
                    >
                        <Lottie
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData: facebookLottie,
                                rendererSettings: {
                                    preserveAspectRatio: "xMidYMid slice",
                                },
                            }}
                            width={"100%"}
                            title='Facebook'
                        />
                    </ButtonBase>
                    <ButtonBase
                        href='https://github.com/MohammedMoataz'
                        target='_blank'
                        sx={{ width: '25%' }}
                    >
                        <Lottie
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData: githubLottie,
                                rendererSettings: {
                                    preserveAspectRatio: "xMidYMid slice",
                                },
                            }}
                            width={"100%"}
                            title='GihHub'
                        />
                    </ButtonBase>
                </Stack>
            </Stack>
        </Box >
    )
}

export default Footer