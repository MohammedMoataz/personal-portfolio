import React, { useContext, useState } from 'react'
import {
    Box,
    Stack,
    Typography,
} from '@mui/material'
import {
    TabContext,
    TabPanel,
} from '@mui/lab'
import LaunchIcon from '@mui/icons-material/Launch'

import { AppContext } from './../../context/context/context.js'
import Header from './../../utils/header.js'
import { CustomTabs, CustomTab } from '../../utils/tab.js'
import { ColorButton } from '../../utils/button.js'
import data from "./../../data/projects.json"

const Projects = () => {
    const { state } = useContext(AppContext)
    const [value, setValue] = useState("All")

    const handleChange = (event, newValue) => setValue(newValue)

    return (
        <Box>
            <Header color={state.color.light} title='PROJECTS' />
            <TabContext value={value}>
                <Box
                    display='flex'
                    justifyContent="center"
                    width="100%"
                >
                    <CustomTabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        aria-label="Portfolio Projects"
                    >
                        {data.categories.keys.map((category, i) =>
                            <CustomTab
                                key={i}
                                value={category}
                                label={`${category} (${data.categories[category].projects.length})`}
                            />
                        )}
                    </CustomTabs>
                </Box>
                <Stack
                    direction={{ xs: 'column' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    my={5}
                >
                    {data.categories[value].projects.map((projectKey, index) => {
                        let project = data.projects[projectKey]

                        return <Box key={project.title}>
                            <TabPanel value={value}>
                                <Stack
                                    direction={{
                                        xs: 'column-reverse',
                                        md: (index + 1) % 2 === 1
                                            ? 'row'
                                            : 'row-reverse',
                                    }}
                                    spacing={{ xs: 1, sm: 2, md: 4 }}
                                    justifyContent="space-around"
                                >
                                    <Stack
                                        width={{ xs: '90%', md: '45%' }}
                                        direction={{ xs: 'column' }}
                                        spacing={{ xs: 1 }}
                                    >
                                        <Typography
                                            variant='h4'
                                            gutterBottom
                                            color={state.color.light}
                                        >
                                            {project.title}
                                        </Typography>
                                        <Box
                                            component={'a'}
                                            href={project.associated.link}
                                            color={state.color.cold}
                                            fontSize={22}
                                            target='_blank'
                                            sx={{
                                                textDecoration: 'none',
                                                '&:hover': {
                                                    color: state.color.teal
                                                }
                                            }}
                                        >
                                            {project.associated.name}
                                        </Box>
                                        <Typography
                                            variant='span'
                                            color={state.color.primary}
                                            fontSize={14}
                                        >
                                            {`${project.start_date} - ${project.end_date}`}
                                        </Typography>
                                        <Typography
                                            variant='span'
                                            color={state.color.light}
                                            maxHeight={200}
                                            my={5}
                                            overflow='scroll'
                                        >
                                            {project.description}
                                        </Typography>
                                        <Typography
                                            variant='span'
                                            color={state.color.secondary}
                                            fontSize={16}
                                        >
                                            Skills:
                                        </Typography>
                                        <Typography
                                            variant='span'
                                            color={state.color.light}
                                            fontSize={14}
                                        >
                                            {project.skills.join(' - ')}
                                        </Typography>
                                        <Box
                                            component={project.contributors ? 'a' : 'span'}
                                            href={project.contributors ? project.contributors.link : ''}
                                            target='_blank'
                                            sx={{
                                                display: 'flex',
                                                color: state.color.secondary,
                                                fontSize: 16,
                                                textDecoration: 'none',
                                                alignItems: 'center',
                                                '&:hover': {
                                                    color: project.contributors ? state.color.teal : ''
                                                }
                                            }}
                                        >
                                            Contributors: {project.contributors
                                                ? <LaunchIcon sx={{ width: 15, mx: 1 }} />
                                                : null
                                            }
                                        </Box>
                                        <Typography
                                            variant='span'
                                            color={state.color.light}
                                            fontSize={14}
                                        >
                                            {project.contributors
                                                ? "I collaborated with " + project.contributors.number + " teamates to complete this project"
                                                : "No contributors. I completed this project on my own."
                                            }
                                        </Typography>
                                        <ColorButton
                                            href={project.link}
                                            target='_blank'
                                        >
                                            <Typography mr={2}>Visit Project</Typography>
                                            <LaunchIcon />
                                        </ColorButton>
                                    </Stack>
                                    <Box
                                        width={{ xs: '90%', md: '45%' }}
                                        display='flex'
                                        justifyContent='center'
                                        alignItems='center'
                                    >
                                        <Box
                                            component='img'
                                            src={project.thumbnail}
                                            alt={project.title}
                                            width={{ xs: '90%' }}
                                            maxHeight={300}
                                        />
                                    </Box>
                                </Stack>
                            </TabPanel>
                        </Box>
                    })}
                </Stack>
            </TabContext>
        </Box >
    )
}

export default Projects