import React, { useContext } from 'react'
import {
    Stack,
    Box,
    List,
    ListItem,
    ListItemText
} from '@mui/material'
import Lottie from 'react-lottie'

import aboutLottie from "./../../assets/lotties/about.json"
import { ThemeContext } from './../../context/context/context.js'
import Header from './../../utils/header.js'

const About = () => {
    const { state } = useContext(ThemeContext)

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
                        <ListItem
                            sx={{
                                color: state.color.light,
                                py: { md: "3%" }
                            }}
                        >
                            <ListItemText
                                primary="Resourceful software engineer with both front-end and back-end development experience."
                            />
                        </ListItem>
                        <ListItem
                            sx={{
                                color: state.color.light,
                                py: { md: "3%" }
                            }}>
                            <ListItemText
                                primary="Smart and consistently educated designer of user interactions on sound and user-friendly websites and databases."
                            />
                        </ListItem>
                        <ListItem
                            sx={{
                                color: state.color.light,
                                py: { md: "3%" }
                            }}>
                            <ListItemText
                                primary="Proven troubleshooting with a solid grounding in data-driven concepts and applications."
                            />
                        </ListItem>
                    </List>
                </Box>
            </Stack>
        </Box >
    )
}

export default About