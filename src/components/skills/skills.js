import React, { useContext } from 'react'
import {
    Box,
    Stack,
    Typography
} from '@mui/material'
import Marquee from "react-fast-marquee"

import Header from './../../utils/header.js'
import { AppContext } from './../../context/context/context.js'
import { skillImage } from "./skillImage.js"
import data from "./../../data/skills.json"

const Skills = () => {
    const { state } = useContext(AppContext)

    return (
        <Box>
            <Header color={state.color.light} title='SKILLS' />
            <Stack
                direction={{ xs: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <Marquee
                    className="marquee"
                    gradient={false}
                    speed={150}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="right"
                >
                    {data.map((skill, index) => (
                        <Stack
                            key={index}
                            direction={{ xs: 'column' }}
                            justifyContent='center'
                            alignItems='center'
                            spacing={{ xs: 1, sm: 2, md: 4 }}
                            sx={{
                                bgcolor: 'transparent',
                                borderRadius: "1rem",
                                boxShadow: `0px 0px 5px 1px ${skill.color}`,
                                border: `1px solid ${skill.color}`,
                                mx: '1rem',
                                width: '10rem',
                                height: '10rem',
                                padding: '1rem',
                                my: 3,
                            }}
                        >
                            <Box
                                component='img'
                                alt={skill.name}
                                src={skillImage(skill.image)}
                                sx={{
                                    maxWidth: '8rem',
                                    height: '4rem',
                                }}
                            />
                            <Typography
                                variant="span"
                                fontWeight={700}
                                fontSize={'1.1rem'}
                                color={skill.color}
                            >
                                {skill.name}
                            </Typography>
                        </Stack>
                    ))}
                </Marquee>
            </Stack>
        </Box>
    )
}

export default Skills