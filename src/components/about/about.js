import React, { useContext } from 'react'
import {
    Stack,
    Box,
    List,
    ListItem,
    ListItemText
} from '@mui/material'
import Lottie from 'react-lottie'

import { AppContext } from './../../context/context/context.js'
import Header from './../../utils/header.js'
import aboutLottie from "./../../assets/lotties/about.json"
import data from '../../data/about.json'

const About = () => {
    const { state } = useContext(AppContext)

    return (
        <Box>
            <Header color={state.color.light} title='ABOUT' />
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent="space-around"
                alignItems="center"
            >
                <Box
                    sx={{
                        width: { xs: "50%", md: "30%" },
                    }}
                >
                    <Lottie
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: aboutLottie,
                            rendererSettings: {
                                preserveAspectRatio: "xMidYMid slice",
                            },
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        width: { xs: "75%", md: "45%" },
                        alignItems: { xs: 'center', md: "flex-start" }
                    }}
                >
                    <List>
                        {data.data.map((text, index) => <ListItem
                            key={index}
                            sx={{
                                color: state.color.light,
                                py: { md: "2%" }
                            }}>
                            <ListItemText primary={text} />
                        </ListItem>
                        )}
                    </List>
                </Box>
            </Stack >
        </Box >
    )
}

export default About