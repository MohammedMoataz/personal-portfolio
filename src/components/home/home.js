import React, { useContext } from 'react'
import {
    Stack,
    Box,
    Typography
} from '@mui/material'

import { AppContext } from './../../context/context/context.js'
import { ColorBorderButton } from './../../utils/button.js'
import CustomButtonBase from '../../utils/buttonbase.js'
import CustomizedMenus from '../../utils/dropdown.js'

import gmailLottie from './../../assets/lotties/gmail.json'
import linkedinLottie from './../../assets/lotties/linkedin.json'
import facebookLottie from './../../assets/lotties/facebook.json'
import githubLottie from './../../assets/lotties/github.json'
import img from "./../../assets/webp/mohammed.webp"
import data from '../../data/portfolio.json'

const Home = () => {
    const { state } = useContext(AppContext)

    return (
        <Box>
            <Stack
                direction={{ xs: 'column-reverse', md: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent="space-between"
                alignItems="center"
            >
                <Stack
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
                        {data.title}
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
                        {data.name}
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
                    </Stack>
                    <Stack
                        sx={{ py: "2%" }}
                        direction={{ xs: 'row' }}
                        spacing={{ xs: 3, sm: 5, md: 7 }}
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <CustomizedMenus />
                        <ColorBorderButton
                            variant="outlined"
                            size="large"
                            href='#Contact'
                        >
                            Contact
                        </ColorBorderButton>
                    </Stack>
                </Stack>
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
