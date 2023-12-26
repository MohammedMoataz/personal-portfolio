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
                data-aos="fade-up"
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
                    direction="left"
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
                                width: { xs: '6rem', md: '10rem' },
                                height: { xs: '6rem', md: '10rem' },
                                padding: '0.7rem',
                                mx: 2,
                                my: 3,
                            }}
                        >
                            <Box
                                component='img'
                                alt={skill.name}
                                src={skillImage(skill.image)}
                                sx={{
                                    maxWidth: { xs: '4rem', md: '8rem' },
                                    height: { xs: '3rem', md: '4rem' },
                                }}
                            />
                            <Typography
                                variant="span"
                                fontWeight={700}
                                fontSize={{ xs: '0.7rem', md: '1.1rem' }}
                                color={skill.color}
                            >
                                {skill.name}
                            </Typography>
                        </Stack>
                    ))}
                </Marquee>
            </Stack >
        </Box >
    )
}

export default Skills
