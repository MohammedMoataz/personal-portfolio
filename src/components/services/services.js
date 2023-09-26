import React, { useContext } from 'react'
import {
    Box,
    Stack,
} from '@mui/material'

import Header from './../../utils/header.js'
import Card from './../../utils/card.js'
import { AppContext } from './../../context/context/context.js'

import backend from "./../../assets/webp/services/backend.webp"
import frontend from "./../../assets/webp/services/frontend.webp"
import mobile from "./../../assets/webp/services/mobile.webp"
import blockchain from "./../../assets/webp/services/blockchain.webp"
import database from "./../../assets/webp/services/database.webp"

const Services = () => {
    const { state } = useContext(AppContext)

    return (
        <Box>
            <Header color={state.color.light} title='SERVICES' />
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 3, md: 4 }}
            >
                <Card src={backend} color={state.color.light} alt="Backend Development" text="Backend Development" />
                <Card src={frontend} color={state.color.light} alt="Frontend Development" text="Frontend Development" />
                <Card src={mobile} color={state.color.light} alt="Mobile App Development" text="Mobile App Development" />
                <Card src={blockchain} color={state.color.light} alt="BlockChain Development" text="BlockChain Development" />
                <Card src={database} color={state.color.light} alt="Database Development" text="Database Development" />
            </Stack>
        </Box>
    )
}

export default Services