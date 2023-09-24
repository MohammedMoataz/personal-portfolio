import React, { useContext } from 'react'
import {
    Stack,
    Box,
    // ButtonBase,
    // Typography
} from '@mui/material'
// import Lottie from 'react-lottie'

// import gmailLottie from './../../assets/lotties/gmail.json'
// import linkedinLottie from './../../assets/lotties/linkedin.json'
// import facebookLottie from './../../assets/lotties/facebook.json'
// import githubLottie from './../../assets/lotties/github.json'

import img from "./mohammed.svg"
// import { ThemeContext } from './../../context/context/context.js'
// import { ColorBorderButton, ColorButton } from './../../utils/button.js'

const Home = () => {
    // const { state } = useContext(ThemeContext)

    return (
        <Box>
            <Stack
                direction={{ xs: 'column-reverse', md: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent="space-between"
                alignItems="center"
            >
                {/* <Stack
                    direction={{ xs: 'column' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    justifyContent="space-evenly"
                    sx={{
                        width: { xs: "75%", md: "45%" },
                        alignItems: { xs: 'center', md: "flex-start" }
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            color: state.color.secondary,
                            fontWeight: 700,
                            fontSize: { xs: 24, sm: 28, md: 32, lg: 36 },
                        }}
                    >
                        Software Engineer
                    </Typography>
                    <Typography
                        variant="h1"
                        gutterBottom
                        sx={{
                            color: state.color.light,
                            fontWeight: 900,
                            fontSize: { xs: 24, sm: 36, md: 44, lg: 50 },
                        }}
                    >
                        Mohammed Moataz
                    </Typography>
                    <Stack
                        direction={{ xs: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 3 }}
                        justifyContent="flex-start"
                        alignItems='flex-start'
                        sx={{
                            width: '70%',
                            py: "2%"
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
                    <Stack
                        sx={{ py: "2%" }}
                        direction={{ xs: 'row' }}
                        spacing={{ xs: 3, sm: 5, md: 7 }}
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <ColorButton
                            variant="contained"
                            size="large"
                            href='https://docs.google.com/document/d/1ZVKtWKO7fh6csbRjYcLXriAlIA9lcXPnO6Z9buhObXA/edit?usp=sharing'
                            target="_blank"
                        >
                            Resume
                        </ColorButton>
                        <ColorBorderButton
                            variant="outlined"
                            size="large"
                            href='#Contact'
                        >
                            Contact
                        </ColorBorderButton>
                    </Stack>
                </Stack> */}
                <Box
                    sx={{
                        width: { xs: "75%", md: "45%" },
                        padding: "5%",
                        alignItems: { xs: 'center', md: "flex-start" }
                    }}
                >
                    <Box
                        component='img'
                        alt="Mohammed Moataz"
                        src={img}
                        sx={{ width: "100%", height: "100%" }}
                    />
                </Box>
            </Stack>
        </Box >
    )
}

export default Home
