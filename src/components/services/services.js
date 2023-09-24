import React, { useContext } from 'react'
import {
    Box,
    Stack,
} from '@mui/material'

import Header from './../../utils/header.js'
import Card from './../../utils/card.js'
import { ThemeContext } from './../../context/context/context.js'

import backend from './services/backend.svg'
import frontend from './services/frontend.svg'
import mobile from './services/mobile.svg'
import blockchain from './services/blockchain.svg'
import database from './services/database.svg'

const Services = () => {
    const { state } = useContext(ThemeContext)

    return (
        <Box>
            <Header color={state.color.light} title='SERVICES' />
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <Card src={backend} color={state.color.light} alt="Backend Development" text="Backend Development" />
                <Card src={frontend} color={state.color.light} alt="Frontend Development" text="Frontend Development" />
                <Card src={mobile} color={state.color.light} alt="Mobile Development" text="Mobile Development" />
                <Card src={blockchain} color={state.color.light} alt="BlockChain Development" text="BlockChain Development" />
                <Card src={database} color={state.color.light} alt="Database Development" text="Database Development" />
            </Stack>
        </Box>
    )
}

export default Services